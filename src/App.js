import './App.css';
import { useState } from 'react';
import LogInRegister from './components/LogInRegister';

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
      <LogInRegister />
    }
    </div>
  );
}

export default App;
