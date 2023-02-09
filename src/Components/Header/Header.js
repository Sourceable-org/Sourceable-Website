import { db } from '../Firebase/Firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Firebase/Firebase';
import './Header.css';
import { FaRocketchat } from "react-icons/fa";


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
				bg='dark'
				variant='dark'
				fixed='top'>
				<Container className='navstyle'>
					<Navbar.Brand as={Link} to='/'>
						Sourceable
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link as={Link} to='/' className='navOnHover'>
								Home
							</Nav.Link>
							<Nav.Link
								as={Link}
								to='/dashboard'
								className='navOnHover'>
								Dashboard
							</Nav.Link>
							<Nav.Link
								as={Link}
								to='/explore'
								className='navOnHover'>
								Explore
							</Nav.Link>
						</Nav>
						<Nav.Link
							as={Link}
							to='/contact'
							className='navOnHover'>
							Contact Us
						</Nav.Link>
						{loggedIn ? (
							<Nav.Link
								className='navOnHover'
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
								className='navOnHover'>
								Join Us
							</Nav.Link>
						)}
						<Nav.Link
							as={Link}
							to='/mygallery'
							className='navOnHover'>
							My Gallery
						</Nav.Link>

						<h3 className='payment'><a href="https://gofund.me/462fbdac" target="_blank">Support US</a></h3>

						<Nav.Link 
						as={Link} 
						to="/thread" 
						className="navOnHover">
						<FaRocketchat size={30} className="icon-message" />
            </Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
