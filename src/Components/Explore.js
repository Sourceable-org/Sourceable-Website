import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import earthquake_json_data from './Constants.js';

mapboxgl.accessToken =
	'pk.eyJ1IjoiYWZhYW4wMDciLCJhIjoiY2t5NXBxZmduMG81ZjJ4b25mbjd2aW8yOSJ9.yxrkp9nmvfPFHq1aXPEIeQ';

const Explore = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		if (map.current) return; // initialize map only once

		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			zoom: 0.3,
			center: [0, 20],
			style: 'mapbox://styles/mapbox/streets-v11',
		});

		map.current.addControl(new mapboxgl.NavigationControl());

		// filters for classifying earthquakes into five categories based on magnitude
		const mag1 = ['<', ['get', 'mag'], 2];
		const mag2 = [
			'all',
			['>=', ['get', 'mag'], 2],
			['<', ['get', 'mag'], 3],
		];
		const mag3 = [
			'all',
			['>=', ['get', 'mag'], 3],
			['<', ['get', 'mag'], 4],
		];
		const mag4 = [
			'all',
			['>=', ['get', 'mag'], 4],
			['<', ['get', 'mag'], 5],
		];
		const mag5 = ['>=', ['get', 'mag'], 5];

		// colors to use for each categories
		const colors = ['#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c'];

		map.current.on('load', () => {
			// add a clustered GeoJSON source for a sample set of earthquakes
			map.current.addSource('earthquakes', {
				type: 'geojson',
				// data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
				data: earthquake_json_data,
				cluster: true,

				// cluster radius is the distance upto which points are grouped together
				// less the cluster radius more the individual points and vice versa
				clusterRadius: 80,
				clusterProperties: {
					// keep separate counts for each magnitude category in a cluster
					mag1: ['+', ['case', mag1, 1, 0]],
					mag2: ['+', ['case', mag2, 1, 0]],
					mag3: ['+', ['case', mag3, 1, 0]],
					mag4: ['+', ['case', mag4, 1, 0]],
					mag5: ['+', ['case', mag5, 1, 0]],
				},
			});
			// circle and symbol layers for rendering individual earthquakes (un clustered points)
			map.current.addLayer({
				id: 'earthquake_circle',
				type: 'circle',
				source: 'earthquakes',
				filter: ['!=', 'cluster', true],
				paint: {
					'circle-color': [
						'case',
						mag1,
						colors[0],
						mag2,
						colors[1],
						mag3,
						colors[2],
						mag4,
						colors[3],
						colors[4],
					],
					'circle-opacity': 0.6,
					'circle-radius': 12,
				},
			});

			map.current.addLayer({
				id: 'earthquake_label',
				type: 'symbol',
				source: 'earthquakes',
				filter: ['!=', 'cluster', true],
				layout: {
					'text-field': [
						'number-format',
						['get', 'mag'],
						{ 'min-fraction-digits': 1, 'max-fraction-digits': 1 },
					],
					'text-font': [
						'Open Sans Semibold',
						'Arial Unicode MS Bold',
					],
					'text-size': 12,
				},
				paint: {
					'text-color': [
						'case',
						['<', ['get', 'mag'], 3],
						'black',
						'white',
					],
				},
			});

			// objects for caching and keeping track of HTML marker objects (for performance)
			const markers = {};
			let markersOnScreen = {};

			function updateMarkers() {
				const newMarkers = {};
				const features = map.current.querySourceFeatures('earthquakes');

				// for every cluster on the screen, create an HTML marker for it (if we didn't yet),
				// and add it to the map if it's not there already
				for (const feature of features) {
					const coords = feature.geometry.coordinates;
					const props = feature.properties;
					if (!props.cluster) continue;
					const id = props.cluster_id;

					let marker = markers[id];
					if (!marker) {
						const el = createDonutChart(props);

						const popup = new mapboxgl.Popup({
							offset: 25,
						}).setText(
							'Construction on the Washington Monument began in 1848.'
						);

						marker = markers[id] = new mapboxgl.Marker({
							element: el,
						})
							.setLngLat(coords)
							.setPopup(popup);

						marker.getElement().addEventListener('click', () => {
							alert('Click Me');
						});
					}

					newMarkers[id] = marker;

					if (!markersOnScreen[id]) {
						marker.addTo(map.current);
					}
				}

				// for every marker we've added previously, remove those that are no longer visible
				for (const id in markersOnScreen) {
					if (!newMarkers[id]) {
						markersOnScreen[id].remove();
					}
				}
				markersOnScreen = newMarkers;
			}

			// after the GeoJSON data is loaded, update markers on the screen on every frame
			map.current.on('render', () => {
				if (!map.current.isSourceLoaded('earthquakes')) return;
				updateMarkers();
			});
		});

		// code for creating an SVG donut chart from feature properties
		function createDonutChart(props) {
			const offsets = [];
			const counts = [
				props.mag1,
				props.mag2,
				props.mag3,
				props.mag4,
				props.mag5,
			];
			let total = 0;
			for (const count of counts) {
				offsets.push(total);
				total += count;
			}
			const fontSize =
				total >= 1000 ? 22 : total >= 100 ? 20 : total >= 10 ? 18 : 16;
			const r =
				total >= 1000 ? 50 : total >= 100 ? 32 : total >= 10 ? 24 : 18;
			const r0 = Math.round(r * 0.6);
			const w = r * 2;

			let html = `<div>
<svg width="${w}" height="${w}" viewbox="0 0 ${w} ${w}" text-anchor="middle" style="font: ${fontSize}px sans-serif; display: block">`;

			for (let i = 0; i < counts.length; i++) {
				html += donutSegment(
					offsets[i] / total,
					(offsets[i] + counts[i]) / total,
					r,
					r0,
					colors[i]
				);
			}
			html += `<circle cx="${r}" cy="${r}" r="${r0}" fill="white" />
<text dominant-baseline="central" transform="translate(${r}, ${r})">
${total.toLocaleString()}
</text>
</svg>
</div>`;

			const el = document.createElement('div');
			el.innerHTML = html;
			return el.firstChild;
		}

		function donutSegment(start, end, r, r0, color) {
			if (end - start === 1) end -= 0.00001;
			const a0 = 2 * Math.PI * (start - 0.25);
			const a1 = 2 * Math.PI * (end - 0.25);
			const x0 = Math.cos(a0),
				y0 = Math.sin(a0);
			const x1 = Math.cos(a1),
				y1 = Math.sin(a1);
			const largeArc = end - start > 0.5 ? 1 : 0;

			// draw an SVG path
			return `<path d="M ${r + r0 * x0} ${r + r0 * y0} L ${r + r * x0} ${
				r + r * y0
			} A ${r} ${r} 0 ${largeArc} 1 ${r + r * x1} ${r + r * y1} L ${
				r + r0 * x1
			} ${r + r0 * y1} A ${r0} ${r0} 0 ${largeArc} 0 ${r + r0 * x0} ${
				r + r0 * y0
			}" fill="${color}" />`;
		}
	}, []);

	return (
		<div>
			Explore
			<div>
				<div ref={mapContainer} className='map-container' />
			</div>
		</div>
	);
};

export default Explore;
