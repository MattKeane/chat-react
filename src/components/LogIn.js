import { useState } from 'react';
import '../App.css';

export default function LogIn(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
			<button>Sign In</button>
		</form>
	)
}