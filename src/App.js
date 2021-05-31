import './App.css';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="App">
    {
      loggedIn 
      ?
      <p>User logged in</p>
      :
      <p>No user logged in</p>
    }
    </div>
  );
}

export default App;
