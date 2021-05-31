import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import NavBar from './NavBar';
import GlobalChat from './GlobalChat';

export default function Main(props) {
	const [currentMode, setCurrentMode] = useState('');

	const currentUser = useContext(UserContext);

	return (
		<React.Fragment>
			<NavBar logOutUser={ props.logOutUser } setCurrentMode={ setCurrentMode } />
			<p>Welcome, {currentUser.username}!</p>
			{
				currentMode === 'globalChat'
				&&
				<GlobalChat />
			}
		</React.Fragment>
	)
}