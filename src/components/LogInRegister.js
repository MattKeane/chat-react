import React, { useState } from 'react';
import LogIn from './LogIn';

export default function LogInRegister(props) {
	const [registerMode, setRegisterMode] = useState(false);

	return (
		<React.Fragment>
			{
				registerMode
				?
				<p>Register Mode</p>
				:
				<LogIn />
			}
		</React.Fragment>
	)
}