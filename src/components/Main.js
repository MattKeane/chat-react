import React, { useContext } from 'react';
import { UserContext } from '../App';
import NavBar from './NavBar';

export default function Main(props) {

	const currentUser = useContext(UserContext);

	return (
		<React.Fragment>
			<NavBar logOutUser={ props.logOutUser } />
			<p>Welcome, {currentUser.username}!</p>
		</React.Fragment>
	)
}