import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components

import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import Explore from './Components/Explore/Explore.js';
import About from './Components/About/About.js';
import Footer from './Components/Footer/Footer.js';
import Contact from './Components/Contact/Contact.js';
import JoinUs from './Components/JoinUs/JoinUs.js';
import Gallery from './Components/Gallery/Gallery.js';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/explore' element={<Explore />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route path='/join' element={<JoinUs />}></Route>
				<Route path='/mygallery' element={<Gallery />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
