import React, { Suspense, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About.js';
import Chatbox from './Components/Chatbox/Chatbox.js';
import Contact from './Components/Contact/Contact.js';
//components
import Footer from './Components/Footer/Footer.js';
import Gallery from './Components/Gallery/Gallery.js';
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import JoinUs from './Components/JoinUs/JoinUs.js';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import IncidentChat from './Components/IncidentChat/IncidentChat';
import Dashboard from './Components/Dashboard/Dashboard.js';
import PaymentButton from './Components/PaymentButton/PaymentButton';
// import ReactGa4 from "react-ga";
import ReactGA from "react-ga4";

const Explore = React.lazy(() => import('./Components/Explore/Explore'));


const TRACTING_ID = 'G-T2J1RSTLG9';
ReactGA.initialize(TRACTING_ID);


const App = () => {

	// useEffect(()=>{
	// 	// ReactGA.pageview("window.location.pathname + window.location.search")
	// 	// ReactGA.send({ hitType: "pageview", page: "/explore" });
	// 	ReactGA.event({
	// 		category: "time spent cat",
	// 		action: "time spent action ",
	// 		// label: "your label", // optional
	// 		// value: 99, // optional, must be a number
	// 		nonInteraction: true, // optional, true/false
	// 		// transport: "xhr", // optional, beacon/xhr/image
	// 	  });

	// },[]);
	
	return (
		<>
			<Header />
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route path='/explore' element={<Explore />} />
					<Route path='/about' element={<About />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/join' element={<JoinUs />}></Route>
					<Route path='/mygallery' element={<Gallery />}></Route>
					<Route path='/thread' element={<Chatbox />} />
					<Route path='/payment' element={<PaymentButton />} />
					<Route path='/chat' element={<IncidentChat/>}></Route>
					<Route path='/dashboard' element={<Dashboard/>}></Route>

				</Routes>
			</Suspense>

			<Routes>
				<Route exact path='/explore' element={null}></Route>
				<Route path='/' element={<Footer />}></Route>
				<Route path='/mygallery' element={<Footer />}></Route>
			</Routes>
		</>
	);
};

export default App;
