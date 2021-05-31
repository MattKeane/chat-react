import '../App.css';

export default function NavBar(props) {

	const logOut = async e => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/auth/logout';
		const logOutResponse = await fetch(url, {
			credentials: 'include',
		});
		if (logOutResponse.status === 200) {
			props.logOutUser();
		}
	};

	return (
		<nav>
			<ul>
				<li className="pseudolink" onClick={ logOut }>Log Out</li>
			</ul>
		</nav>
	)
}