import { getAuth } from 'firebase/auth';

const getLoggedInUser = () => {
	const auth = getAuth();

	const user = auth.currentUser;

	// if the user is logged in currently then return their email
	if (user) {
		return user.email;
	}
	// if not just return undefined
	else {
		return undefined;
	}
};

export default getLoggedInUser;
