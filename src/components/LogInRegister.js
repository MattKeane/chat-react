import React, { useState } from 'react';
import LogIn from './LogIn';

export default function LogInRegister(props) {
	const [registerMode, setRegisterMode] = useState(false);

	const toggleMode = () => setRegisterMode(!registerMode);

	return (
		<React.Fragment>
			{
				registerMode
				?
				<p>Register Mode</p>
				:
				<LogIn toggleMode={ toggleMode } />
			}
		</React.Fragment>
	)
}