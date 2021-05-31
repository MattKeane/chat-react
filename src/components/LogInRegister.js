import React, { useState } from 'react';

export default function LogInRegister(props) {
	const [registerMode, setRegisterMode] = useState(false);

	return (
		<React.Fragment>
			{
				registerMode
				?
				<p>Register Mode</p>
				:
				<p>Log In Mode</p>
			}
		</React.Fragment>
	)
}