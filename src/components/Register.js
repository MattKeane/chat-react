import { useState } from 'react';
import '../App.css';

export default function Register(props) {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [verifyPassword, setVerifyPassword] = useState('');

	return (
		<form>
			<h2>Register</h2>
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
			<button>Sign Up</button>
			<p 
				className="pseudolink"
				onClick={ props.toggleMode }
			>
				Already have an account? Sign in!
			</p>
		</form>
		)
}