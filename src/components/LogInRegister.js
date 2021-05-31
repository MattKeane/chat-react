import React, { useState } from 'react';
import LogIn from './LogIn';
import Register from './Register';

export default function LogInRegister(props) {
	const [registerMode, setRegisterMode] = useState(false);

	const toggleMode = () => setRegisterMode(!registerMode);

	return (
		<React.Fragment>
			{
				registerMode
				?
				<Register toggleMode={ toggleMode } />
				:
				<LogIn toggleMode={ toggleMode } />
			}
		</React.Fragment>
	)
}