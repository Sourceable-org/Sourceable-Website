import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase/Firebase';
import NewsList from '../NewsList/NewsList.js';
import './Explore.css';

// Set the MapBox Access Token. This is present in your MapBox Account
mapboxgl.accessToken =
	'pk.eyJ1IjoiYWZhYW4wMDciLCJhIjoiY2t5NXBxZmduMG81ZjJ4b25mbjd2aW8yOSJ9.yxrkp9nmvfPFHq1aXPEIeQ';

// In case of Mapbox coordinates are required in the form of [lng, lat]
const Explore = () => {
	// create a reference for the map
	const mapContainer = useRef(null);
	const map = useRef(null);

	// create a reference for the month slider
	const monthSliderRef = useRef(null);

	// state to store whether month slider input is changed or not
	const [monthSliderChanged, setMonthSliderChanged] = useState(false);

	// create a reference for the year selector
	const yearSelectorRef = useRef(null);

	const DEFAULT_YEAR = new Date().getFullYear();

	const DEFAULT_MONTH = new Date().getMonth();

	// state to store email address of the logged in user
	const [userEmail, setUserEmail] = useState(undefined);

	// store the book marks of the user in this state variable
	const [userBookMarks, setUserBookMarks] = useState([]);

	// state to store the data of incidents after fetching data from FireBase
	const [incidents, setIncidentsData] = useState([]);

	// state to store the data that needs to be shown when a marker is clicked
	const [newsListData, setNewsListData] = useState([]);

	// Initial zoom value of the map when it is rendered
	const INITIAL_MAP_ZOOM_LEVEL = 7;

	// array to store the mapping of index with month name
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const STARTING_YEAR = 2021;
	const ENDING_YEAR = 2040;

	// generate year choices based on starting and ending year values
	const year_choices = [...Array(ENDING_YEAR - STARTING_YEAR + 1).keys()].map(
		(year) => year + STARTING_YEAR
	);

	const auth = getAuth();
	const navigate = useNavigate();

	// function to set the Data of Map on incidents data based on month and year
	const filterDataPointsByMonthAndYear = (month, year) => {
		// update the data of map with monthly and yearly specific incidents
		map.current
			.getSource('incidents')
			.setData(getIncidentsByMonthAndYear(month, year));

		// set newsListData to empty array when slider input is changed
		setNewsListData([]);
	};

	// function to get incidents data filtered by year and month
	const getIncidentsByMonthAndYear = (month, year) => {
		// filter incidents on the basis of month and year
		const filtered_incidents = incidents.filter((incident) => {
			return (
				incident.properties.month === month &&
				incident.properties.year === year
			);
		});

		// return the incidents data filtered by month and year
		return { features: filtered_incidents };
	};

	useEffect(() => {
		const getIncidentsDataFromFireStore = async (db) => {
			// get all documents under the Explore Collection
			const querySnapshot = await getDocs(collection(db, 'Explore'));

			// iterate all the documents and fetch it's data
			const incidentsListData = querySnapshot.docs.map((doc) => {
				// fetch the data of the document
				const data = doc.data();

				// add the incident_id field with document id
				data.properties.incident_id = doc.id;

				return data;
			});

			// for each incident add month and year field in it's property
			const finalIncidentsListData = incidentsListData.map((incident) => {
				const date = new Date(incident.properties.created);

				incident.properties.month = date.getMonth();
				incident.properties.year = date.getFullYear();

				return incident;
			});

			// update the incidents set with the incidents data
			setIncidentsData(finalIncidentsListData);
		};

		// call the function to fetch incidents data
		getIncidentsDataFromFireStore(db);
	}, []);

	useEffect(() => {
		const getUserBookMarksData = async (db) => {
			if (userEmail === undefined) return;

			const userBookmarkDocumentRef = doc(db, 'BookMarks', userEmail);

			const data = await getDoc(userBookmarkDocumentRef);

			const userBookMarks = data.data()['bookmarks'];
			setUserBookMarks(userBookMarks);
		};

		// call the function to fetch incidents bookmarks data
		getUserBookMarksData(db);
	}, [userEmail]);

	useEffect(() => {
		// when the auth status is changed
		onAuthStateChanged(auth, (user) => {
			// if user object exists means loggedIn
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				setUserEmail(user.email);
			}
			// user is not logged in
			else {
				// redirect to login page
				navigate('/join');
			}
		});
	}, [auth, navigate]);

	useEffect(() => {
		// no incidents are fetched then do nothing
		if (incidents.length === 0) return;

		// initialize the map only once
		if (map.current) return;

		// filters for classifying earthquakes into five categories based on the incident_type
		// get all incidents whose incident_type value is less than 2
		const incident_type_1 = ['<', ['get', 'incident_type'], 2];

		// get all incidents whose incident_type value is less than 3 and greater than equal to 2
		const incident_type_2 = [
			'all',
			['>=', ['get', 'incident_type'], 2],
			['<', ['get', 'incident_type'], 3],
		];

		// get all incidents whose incident_type value is less than 4 and greater than equal to 3
		const incident_type_3 = [
			'all',
			['>=', ['get', 'incident_type'], 3],
			['<', ['get', 'incident_type'], 4],
		];

		// get all incidents whose incident_type value is less than 5 and greater than equal to 4
		const incident_type_4 = [
			'all',
			['>=', ['get', 'incident_type'], 4],
			['<', ['get', 'incident_type'], 5],
		];

		// get all incidents whose incident_type value greater than equal to 5
		const incident_type_5 = ['>=', ['get', 'incident_type'], 5];

		// colors to be used for each incident_type category
		const colors = ['#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c'];

		// create a Map instance and pass the initial parameters such as zoom, center and style
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			zoom: INITIAL_MAP_ZOOM_LEVEL,
			center: [38.32337521791281, 35.352800788805794],
			style: 'mapbox://styles/mapbox/streets-v11',
		});

		// add navigation controls in the map
		map.current.addControl(new mapboxgl.NavigationControl());

		// this function is executed after the map is loaded successfully
		map.current.on('load', () => {
			// add a clustered GeoJSON source of incidents
			map.current.addSource('incidents', {
				// format of the data provided to the map
				type: 'geojson',

				// we can also add a url of geoJSON source
				data: { features: incidents },

				// cluster the given geoJSON data
				cluster: true,

				// cluster radius is the distance upto which points are grouped together
				// less the cluster radius more the individual points and vice versa
				clusterRadius: 80,

				// set the properties of clusters
				clusterProperties: {
					// keep the separate counts for each incident category in a cluster
					incident_type_1: ['+', ['case', incident_type_1, 1, 0]],
					incident_type_2: ['+', ['case', incident_type_2, 1, 0]],
					incident_type_3: ['+', ['case', incident_type_3, 1, 0]],
					incident_type_4: ['+', ['case', incident_type_4, 1, 0]],
					incident_type_5: ['+', ['case', incident_type_5, 1, 0]],
				},
			});

			filterDataPointsByMonthAndYear(DEFAULT_MONTH, DEFAULT_YEAR);

			// show circles on the Map for points that are individual (non clustered points)
			map.current.addLayer({
				// set the unique id of the layer
				id: 'incident_circle',

				// type of shape to be rendered for non clustered points
				type: 'circle',

				// the source of this layer is the main incidents layer that has all the geoJSON data
				source: 'incidents',
				// filter that grabs points that are not clustered
				filter: ['!=', 'cluster', true],

				// for non clustered points paint the following on the map
				paint: {
					// the circle color for such points will be decided based on their incident_type
					// below is the switch case for the same
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

					// set the radius of such points to 12 units
					'circle-radius': 12,
				},
			});

			// objects for caching and keeping track of HTML marker objects (for performance)
			const markers = {};
			let markersOnScreen = {};

			const updateMarkerForSinglePoint = () => {
				// get all the non clustered points from the map
				const features = map.current.queryRenderedFeatures({
					layers: ['incident_circle'],
				});

				// iterate all the features
				for (const feature of features) {
					// fetch the coordinates of the current feature
					const coords = feature.geometry.coordinates;

					// fetch the properties of the element
					const props = feature.properties;

					// create a normal div element
					const el = document.createElement('div');
					el.className = 'marker';

					// create a marker instance and set is's coordinates as fetched from above
					let marker = new mapboxgl.Marker({ element: el }).setLngLat(
						coords
					);

					// attach click listener to the marker
					marker.getElement().addEventListener('click', () => {
						// set the newsListData equal to cluster_points_data array

						props.file = JSON.parse(props.file);
						// props.created = JSON.parse(props.created);

						setNewsListData([{ properties: props }]);
					});

					marker.addTo(map.current);
				}
			};

			const updateMarkers = () => {
				const newMarkers = {};

				// get all the clusters from the map
				const features = map.current.querySourceFeatures('incidents');

				// iterate all the features
				for (const feature of features) {
					// fetch the coordinates of the current feature
					const coords = feature.geometry.coordinates;

					// get the properties of the cluster
					const props = feature.properties;

					// if it is not a cluster then skip
					if (!props.cluster) continue;

					// If it is a cluster then create an HTML marker for it (if we didn't yet),
					// and add it to the map if it's not there already

					// get the cluster id of current cluster
					const id = props.cluster_id;

					// get the number of points of the current cluster
					const pointCount = props.point_count;

					// stores the data of file of all the points in a given cluster
					let cluster_points_data;

					// fetch the data of all points in the current cluster
					map.current
						.getSource('incidents')
						.getClusterLeaves(
							id,
							pointCount,
							0,
							(error, cluster_features) => {
								// if no error then store the data of all points in the cluster_points_data array
								if (!error) {
									cluster_points_data =
										// iterate through the cluster_features array
										cluster_features.map(
											(cluster_point) => {
												return {
													properties:
														cluster_point.properties,
												};
											}
										);
								}
							}
						);

					// get the marker for the current cluster
					let marker = markers[id];

					// if marker is not present
					if (!marker) {
						// create the donut chart element for the marker
						const el = createDonutChart(props);

						// create a marker instance and set is's coordinates as fetched from above
						marker = markers[id] = new mapboxgl.Marker({
							element: el,
						}).setLngLat(coords);

						// attach click listener to the marker
						marker.getElement().addEventListener('click', () => {
							// set the newsListData equal to cluster_points_data array
							setNewsListData(cluster_points_data);

							// Also zoom the map in such a way till the cluster gets split
							// into smaller clusters
							map.current
								.getSource('incidents')
								.getClusterExpansionZoom(id, (error, zoom) => {
									// if no error then set the zoom level returned by the method above
									if (!error) {
										// update the zoom and the center of the map
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

					// finally if the marker is not displayed into the screen then display it
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
				updateMarkerForSinglePoint();
			});
		});

		// function to create a donut segment on the donut chart
		const donutSegment = (start, end, r, r0, color) => {
			if (end - start === 1) end -= 0.00001;

			const a0 = 2 * Math.PI * (start - 0.25);

			const a1 = 2 * Math.PI * (end - 0.25);

			const x0 = Math.cos(a0),
				y0 = Math.sin(a0);

			const x1 = Math.cos(a1),
				y1 = Math.sin(a1);

			const largeArc = end - start > 0.5 ? 1 : 0;

			// html code of the donut segment
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

			// fetch the values of all incident types
			const incident_type_counts = [
				props.incident_type_1,
				props.incident_type_2,
				props.incident_type_3,
				props.incident_type_4,
				props.incident_type_5,
			];

			// initialize the total value to 0
			let total = 0;

			// iterate to all 5 types of incident_types
			for (const count of incident_type_counts) {
				// store the cumulative sums in the offsets array
				offsets.push(total);

				// add the count to the total variable
				total += count;
			}

			// select the fontsize according to the value of total variable
			const fontSize =
				total >= 1000 ? 22 : total >= 100 ? 20 : total >= 10 ? 18 : 16;

			// set the radius of the donut Chart based on the value of the total variable
			const r =
				total >= 1000 ? 50 : total >= 100 ? 32 : total >= 10 ? 24 : 18;

			const r0 = Math.round(r * 0.6);

			// compute the diameter and set it as the height and width of chart
			const w = r * 2;

			// html code for the donutChart
			let html = `<div>
<svg width="${w}" height="${w}" viewbox="0 0 ${w} ${w}" text-anchor="middle" style="font: ${fontSize}px sans-serif; display: block">`;

			// iterate all the incident_type_counts
			for (let i = 0; i < incident_type_counts.length; i++) {
				// for each value create it's corresponding donutSegment on the donutChart
				html += donutSegment(
					offsets[i] / total,
					(offsets[i] + incident_type_counts[i]) / total,
					r,
					r0,
					colors[i]
				);
			}

			// html code for the donutChart
			html += `<circle cx="${r}" cy="${r}" r="${r0}" fill="white" />
<text dominant-baseline="central" transform="translate(${r}, ${r})">
${total.toLocaleString()}
</text>map
</svg>
</div>`;

			// create a div element in the DOM
			const el = document.createElement('div');

			// set it's html value equal to the donutChart html
			el.innerHTML = html;

			/// return the element
			return el.firstChild;
		};
	}, [newsListData, incidents, DEFAULT_MONTH, DEFAULT_YEAR]);

	// function to display list that shows media and description
	// it shows data of all the points present in the given cluster
	const displayList = () => {
		// if newsListData is not empty
		if (newsListData.length > 0) {
			return (
				// render the newsListData component
				<div className='mgl-map-overlay'>
					<NewsList
						newsListData={newsListData}
						setNewsListData={setNewsListData}
						userBookMarks={userBookMarks}
						setUserBookMarks={setUserBookMarks}
					/>
				</div>
			);
		}
	};

	const handleYearSelectorChange = (event) => {
		yearSelectorRef.current.value = parseInt(event.target.value);

		filterDataPointsByMonthAndYear(
			parseInt(monthSliderRef.current.value),
			parseInt(yearSelectorRef.current.value)
		);
	};

	const handleMonthSliderChange = (event) => {
		monthSliderRef.current.value = parseInt(event.target.value);

		// update the state to true so now monthSliderRef.current.value is not null
		setMonthSliderChanged(true);

		filterDataPointsByMonthAndYear(
			parseInt(monthSliderRef.current.value),
			parseInt(yearSelectorRef.current.value)
		);
	};

	// inside the return method display the map
	// and show the newsList if user clicks on the cluster point
	return (
		<div>
			<div ref={mapContainer} className='map-container' />
			<div className='map-overlay top'>
				<div className='map-overlay-inner'>
					<h2>Incidents</h2>
					<label id='month'></label>
					<input
						ref={monthSliderRef}
						id='slider'
						type='range'
						min='0'
						max='11'
						step='1'
						defaultValue={DEFAULT_MONTH}
						onChange={handleMonthSliderChange}></input>
					<h5>
						Selected Month:
						{monthSliderChanged
							? months[monthSliderRef.current.value]
							: months[DEFAULT_MONTH]}
					</h5>
					<h6 style={{ float: 'left' }}>Select Year:</h6>
					<select
						style={{ marginLeft: '5px' }}
						ref={yearSelectorRef}
						defaultValue={DEFAULT_YEAR}
						onChange={handleYearSelectorChange}>
						{year_choices.map((year_choice) => {
							return (
								<option value={year_choice}>
									{year_choice}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			{displayList()}
		</div>
	);
};

export default Explore;
