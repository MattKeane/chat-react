import './App.css';
import { useState } from 'react';
import LogInRegister from './components/LogInRegister';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const logInUser = user => {
    setLoggedIn(true);
    setCurrentUser(user);
  };

  return (
    <div className="App">
    {
      loggedIn 
      ?
      <p>User logged in</p>
      :
      <LogInRegister logInUser={ logInUser } />
    }
    </div>
  );
}

export default App;
