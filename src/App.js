import './App.css';
import { useState } from 'react';
import LogInRegister from './components/LogInRegister';
import Main from './components/Main';

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
      <Main />
      :
      <LogInRegister logInUser={ logInUser } />
    }
    </div>
  );
}

export default App;
