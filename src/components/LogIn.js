import { useState } from 'react';
import '../App.css';

export default function LogIn(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/auth/login';
			const logInResponse = await fetch(url, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify({email, password}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const logInJson = await logInResponse.json();
			if (logInResponse.status === 200) {
				props.logInUser(logInJson.data);
			} else {
				setMessage(logInJson.message);
			}
		} catch(err) {
			console.error('Error logging in:');
			console.error(err);
		}
	}

	return (
		<form>
			<h2>Log In</h2>
			<fieldset>
				<label htmlFor="email">Email:</label>
				<input 
					type="email"
					id="email" 
					name="email"
					placeholder="Enter Email"
					value={ email }
					onChange={ e => setEmail(e.target.value) }
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Enter Password"
					value={ password }
					onChange={ e => setPassword(e.target.value) }
				/>
			</fieldset>
			<button onClick={ handleSubmit }>Sign In</button>
			<p 
				onClick={ props.toggleMode }
				className="pseudolink"
			>
				Need an account? Sign up!
			</p>
		</form>
	)
}