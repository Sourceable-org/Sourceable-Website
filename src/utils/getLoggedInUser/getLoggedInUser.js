import { getAuth } from 'firebase/auth';

const getLoggedInUser = () => {
	const auth = getAuth();
	const user = auth.currentUser;

	// if the user is logged in currently then return the loggedIn user object
	if (user) {
		return user;
	}
	// indicates that user is not logged in
	else {
		return undefined;
	}
};

export default getLoggedInUser;
