import { db } from '../Firebase/Firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Firebase/Firebase';
import './Header.css';
import { FaRocketchat } from "react-icons/fa";
import Source_logo from '../../images/Capture.JPG';

const Header = () => {
	const auth = getAuth();
	const [loggedIn, setLoggedIN] = useState(false);
	const [loggedInUserEmail, setLoggedINUserEmail] = useState('');

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setLoggedIN(true);
				setLoggedINUserEmail(user.email);
				// ...
			} else {
				setLoggedIN(false);
				setLoggedINUserEmail('');
			}
		});
	}, [auth]);

	return (
		<div>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg='white'
				variant='light'
				fixed='top'>
				<Container className='navstyle'>
					<Navbar.Brand as={Link} to='/'
					style={{
						color:"black",
						float:"left"

					}}
					>
						<img src={Source_logo} alt='Logo not loaded' 
						style={{
							height:"28px",
						}}
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
							&nbsp;
					<Navbar.Collapse id='responsive-navbar-nav'>
						
						<Nav.Link as={Link} to='/' className='navOnHover'
						style={{
							color:"black",
							
						}}
						>
							
							Home

						</Nav.Link>
						<Nav.Link
							style={{
								color:"black",
								
							}}
							as={Link}
							to='/dashboard'
							className='navOnHover'>
							Dashboard
						</Nav.Link>
						<Nav.Link
							as={Link}
							to='/explore'
							className='navOnHover'
							style={{
								color:"black",
								
							}}
							>
							Explore
						</Nav.Link>
						
						<Nav.Link
							as={Link}
							to='/contact'
							className='navOnHover'
							style={{
								color:"black",
								
							}}
							>
							Contact Us
						</Nav.Link>
						{loggedIn ? (
							<Nav.Link
								as={Link}
								className='navOnHover'
								style={{
									color:"black",
									
								}}
								onClick={() => {
									// e.preventDefault();
									signOut(auth)
										.then(() => {
											console.log('Sign-out successful.');
											setLoggedIN(false);

											updateDoc(
												doc(
													db,
													'Account',
													loggedInUserEmail
												),
												{
													status: serverTimestamp(),
												}
											);

											// navigate("/");
										})
										.catch((error) => {
											console.log(error);
										});
									// app.auth().signOut()
								}}>
								Sign Out
							</Nav.Link>
						) : (
							<Nav.Link
								as={Link}
								to='/join'
								className='navOnHover'
								style={{
									color:"black",
									
								}}
								>
								Join Us
							</Nav.Link>
						)}
						<Nav.Link
							as={Link}
							to='/mygallery'
							className='navOnHover'
							style={{
								color:"black",
								
							}}
							>
							My Gallery
						</Nav.Link>


						<h3 className='navOnHover'><a href="https://gofund.me/462fbdac" target="_blank">Support US</a></h3>

						<Nav.Link 
						as={Link} 
						to="/thread" 
						className="navOnHover"
						style={{
							color:"black",
							
						}}
						>
						<FaRocketchat size={30} className="icon-message" />
            </Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
