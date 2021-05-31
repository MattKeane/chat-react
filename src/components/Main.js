import { useContext } from 'react';
import { UserContext } from '../App';

export default function Main(props) {

	const currentUser = useContext(UserContext);

	return (
		<p>Welcome, {currentUser.username}!</p>
	)
}