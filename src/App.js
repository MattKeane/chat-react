import './App.css';
import { useState, createContext } from 'react';
import LogInRegister from './components/LogInRegister';
import Main from './components/Main';

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const logInUser = user => {
    setLoggedIn(true);
    setCurrentUser(user);
  };

  const logOutUser = () => {
    setLoggedIn(false);
    setCurrentUser({});
  }

  return (
    <UserContext.Provider value={ currentUser }>
      <div className="App">
      {
        loggedIn 
        ?
        <Main logOutUser={ logOutUser } />
        :
        <LogInRegister logInUser={ logInUser } />
      }
      </div>
    </UserContext.Provider>
  );
}

export default App;
