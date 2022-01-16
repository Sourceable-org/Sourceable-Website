import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Firebase/Firebase';
import './Header.css';

const Header = () => {
	const auth = getAuth();
	const [loggedIn, setLoggedIN] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				setLoggedIN(true);
				console.log('OnAuthState', user);
				// ...
			} else {
				//
				// ...
				setLoggedIN(false);

				console.log('User is signed out');
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
								 to="/mygallery" 
								 className='navOnHover' >
									My Gallery
								</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
