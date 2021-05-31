import React, { useContext } from 'react';
import { UserContext } from '../App';
import NavBar from './NavBar';

export default function Main(props) {

	const currentUser = useContext(UserContext);

	return (
		<React.Fragment>
			<NavBar />
			<p>Welcome, {currentUser.username}!</p>
		</React.Fragment>
	)
}