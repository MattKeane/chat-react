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
				<Register 
					toggleMode={ toggleMode }
					logInUser={ props.logInUser } 
				/>
				:
				<LogIn 
					toggleMode={ toggleMode }
					logInUser={ props.logInUser } 
				/>
			}
		</React.Fragment>
	)
}