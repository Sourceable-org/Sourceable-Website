import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsList from '../NewsList/NewsList.js';
import incidents_json_data from './Data.js';
import './Explore.css';

mapboxgl.accessToken =
	'pk.eyJ1IjoiYWZhYW4wMDciLCJhIjoiY2t5NXBxZmduMG81ZjJ4b25mbjd2aW8yOSJ9.yxrkp9nmvfPFHq1aXPEIeQ';

const Explore = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);

	const [newsListData, setNewsListData] = useState([]);

	const INITIAL_MAP_ZOOM_LEVEL = 9;

	const auth = getAuth();
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;

				console.log('OnAuthState', user);
			} else {
				navigate('/join');
				console.log('User is signed out');
			}
		});
	}, [auth, navigate]);

	useEffect(() => {
		if (map.current) return; // initialize map only once

		// filters for classifying earthquakes into five categories based on magnitude
		const incident_type_1 = ['<', ['get', 'incident_type'], 2];
		const incident_type_2 = [
			'all',
			['>=', ['get', 'incident_type'], 2],
			['<', ['get', 'incident_type'], 3],
		];
		const incident_type_3 = [
			'all',
			['>=', ['get', 'incident_type'], 3],
			['<', ['get', 'incident_type'], 4],
		];
		const incident_type_4 = [
			'all',
			['>=', ['get', 'incident_type'], 4],
			['<', ['get', 'incident_type'], 5],
		];
		const incident_type_5 = ['>=', ['get', 'incident_type'], 5];

		// colors to use for each categories
		const colors = ['#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c'];

		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			zoom: INITIAL_MAP_ZOOM_LEVEL,
			center: [38.32337521791281, 35.352800788805794],
			style: 'mapbox://styles/mapbox/streets-v11',
		});

		map.current.addControl(new mapboxgl.NavigationControl());

		map.current.on('load', () => {
			// add a clustered GeoJSON source for a sample set of earthquakes
			map.current.addSource('incidents', {
				type: 'geojson',
				data: incidents_json_data,
				cluster: true,

				// cluster radius is the distance upto which points are grouped together
				// less the cluster radius more the individual points and vice versa
				clusterRadius: 80,
				clusterProperties: {
					// keep separate counts for each magnitude category in a cluster
					incident_type_1: ['+', ['case', incident_type_1, 1, 0]],
					incident_type_2: ['+', ['case', incident_type_2, 1, 0]],
					incident_type_3: ['+', ['case', incident_type_3, 1, 0]],
					incident_type_4: ['+', ['case', incident_type_4, 1, 0]],
					incident_type_5: ['+', ['case', incident_type_5, 1, 0]],
				},
			});
			// circle and symbol layers for rendering individual earthquakes (un clustered points)
			map.current.addLayer({
				id: 'incident_circle',
				type: 'circle',
				source: 'incidents',
				filter: ['!=', 'cluster', true],
				paint: {
					'circle-color': [
						'case',
						incident_type_1,
						colors[0],
						incident_type_2,
						colors[1],
						incident_type_3,
						colors[2],
						incident_type_4,
						colors[3],
						colors[4],
					],
					'circle-radius': 12,
				},
			});

			// objects for caching and keeping track of HTML marker objects (for performance)
			const markers = {};
			let markersOnScreen = {};

			const updateMarkers = () => {
				const newMarkers = {};
				const features = map.current.querySourceFeatures('incidents');

				// for every cluster on the screen, create an HTML marker for it (if we didn't yet),
				// and add it to the map if it's not there already
				for (const feature of features) {
					const coords = feature.geometry.coordinates;

					// get the properties of the cluster
					const props = feature.properties;

					if (!props.cluster) continue;

					// get the cluster id of current cluster
					const id = props.cluster_id;

					// get the number of points of the current cluster
					const pointCount = props.point_count;

					// stores the data of file of all the points in a given cluster
					let cluster_points_file_data;

					// fetch the data of all points in the current cluster
					map.current
						.getSource('incidents')
						.getClusterLeaves(
							id,
							pointCount,
							0,
							(error, cluster_features) => {
								if (!error) {
									cluster_points_file_data =
										cluster_features.map(
											(cluster_point) => {
												return {
													file: cluster_point
														.properties.file,
												};
											}
										);
								}
							}
						);

					let marker = markers[id];
					if (!marker) {
						const el = createDonutChart(props);
						marker = markers[id] = new mapboxgl.Marker({
							element: el,
						}).setLngLat(coords);

						marker.getElement().addEventListener('click', () => {
							setNewsListData(cluster_points_file_data);

							map.current
								.getSource('incidents')
								.getClusterExpansionZoom(id, (error, zoom) => {
									if (!error) {
										map.current.easeTo({
											center: feature.geometry
												.coordinates,
											zoom,
										});
									}
								});
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
			};

			// after the GeoJSON data is loaded, update markers on the screen on every frame
			map.current.on('render', () => {
				if (!map.current.isSourceLoaded('incidents')) return;
				updateMarkers();
			});
		});

		const donutSegment = (start, end, r, r0, color) => {
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
		};

		// code for creating an SVG donut chart from feature properties
		const createDonutChart = (props) => {
			const offsets = [];
			const counts = [
				props.incident_type_1,
				props.incident_type_2,
				props.incident_type_3,
				props.incident_type_4,
				props.incident_type_5,
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
</text>map
</svg>
</div>`;

			const el = document.createElement('div');
			el.innerHTML = html;
			return el.firstChild;
		};
	}, [newsListData]);

	const displayList = () => {
		if (newsListData.length > 0) {
			return (
				<div className='mgl-map-overlay'>
					<NewsList
						newsListData={newsListData}
						setNewsListData={setNewsListData}
					/>
				</div>
			);
		}
	};

	return (
		<div>
			<div ref={mapContainer} className='map-container' />
			{displayList()}
		</div>
	);
};

export default Explore;
