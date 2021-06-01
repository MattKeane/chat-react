import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import '../App.css';

export default function GlobalChat(props) {
	const [messages, setMessages] = useState([]);
	const [outgoingMessage, setOutgoingMessage] = useState('');

	// ref for storing the socket.io client
	// does not connect until useEffect runs
	const { current: socket } = useRef(socketIOClient(process.env.REACT_APP_API_URL, {
		autoConnect: false,
	}));

	const sendMessage = () => {
		socket.emit('global', outgoingMessage);
		setOutgoingMessage('');
	};

	useEffect(() => {
		// connects to global chat
		socket.connect();
		socket.on('global', msg => {
			setMessages(m => [...m, msg]);
		});
		// disconnects on unmounting
		return () => socket.disconnect();
	}, [socket]);

	return (
		<React.Fragment>
			<ul className='chatMessages'>
				{
					messages.map((message, i) => <li key={ i }>{ message}</li>)
				}
			</ul>
			<input
				type="text"
				name="outgoingMessage"
				id="outgoingMessage"
				value={ outgoingMessage }
				onChange={ e => setOutgoingMessage(e.target.value)}
			/>
			<button onClick={ sendMessage }>Send Message</button>
		</React.Fragment>
	)
}