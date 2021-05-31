import { useState } from 'react';
import '../App.css';

export default function LogIn(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log({email, password});
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