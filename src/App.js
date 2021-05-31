import './App.css';
import { useState, createContext, useEffect } from 'react';
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

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + '/api/v1/auth/currentUser';
    fetch(url, {credentials: 'include'})
      .then(res => {
        if (res.status === 200) {
          res.json()
            .then(json => logInUser(json.data))
            .catch(err => console.error(err));
        }
      })
      .catch(err => console.error(err));
  }, []);

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
