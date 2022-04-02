import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About.js';
import Chatbox from './Components/Chatbox/Chatbox.js';
import Contact from './Components/Contact/Contact.js';
import Explore from './Components/Explore/Explore.js';
//components
import Footer from './Components/Footer/Footer.js';
import Gallery from './Components/Gallery/Gallery.js';
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import JoinUs from './Components/JoinUs/JoinUs.js';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />}></Route>
				<Route path='/explore' element={<Explore />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route path='/join' element={<JoinUs />}></Route>
				<Route path='/mygallery' element={<Gallery />}></Route>
				<Route path='/thread' element={<Chatbox />} />
			</Routes>
			<Routes>
				<Route exact path='/explore' component={null}></Route>
				<Route path='/' element={<Footer />}></Route>
				<Route path='/mygallery' element={<Footer />}></Route>
			</Routes>
		</>
	);
};

export default App;
