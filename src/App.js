import React, { Suspense } from 'react';
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

const Explore = React.lazy(() => import('./Components/Explore/Explore'));

const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<div> Loading </div>}>
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route path='/explore' element={<Explore />} />
					<Route path='/about' element={<About />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/join' element={<JoinUs />}></Route>
					<Route path='/mygallery' element={<Gallery />}></Route>
					<Route path='/thread' element={<Chatbox />} />
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
