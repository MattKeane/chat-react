import { useState } from 'react';
import '../App.css';

export default function Register(props) {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [verifyPassword, setVerifyPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		if (password === verifyPassword) {
			const url = process.env.REACT_APP_API_URL + '/api/v1/auth/register';
			try {
				const registerResponse = await fetch(url, {
					method: 'POST',
					credentials: 'include',
					body: JSON.stringify({email, username, password}),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				const registerJson = await registerResponse.json();
				if (registerResponse.status === 201) {
					props.logInUser(registerJson.data);
				} else {
					setMessage(registerJson.message);
				}
			} catch(err) {
				console.error('Error registering user:');
				console.error(err);
			}
		} else {
			setMessage('Passwords must match!');
		}
	};

	return (
		<form>
			<h2>Register</h2>
			<p>{ message }</p>
			<fieldset>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					value={ email }
					onChange={ e => setEmail(e.target.value)}
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Enter Desired Username"
					value={ username }
					onChange={ e => setUsername(e.target.value)}
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
			<fieldset>
				<label htmlFor="verifyPassword">Re-enter Password:</label>
				<input
					type="password"
					id="verifyPassword"
					name="verifyPassword"
					placeholder="Re-enter Password"
					value={ verifyPassword }
					onChange={ e => setVerifyPassword(e.target.value) }
				/>
			</fieldset>
			<button onClick={ handleSubmit }>Sign Up</button>
			<p 
				className="pseudolink"
				onClick={ props.toggleMode }
			>
				Already have an account? Sign in!
			</p>
		</form>
		)
}