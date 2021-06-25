import React, { useState, useEffect } from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyle';

import Nav from './components/Nav';
import Profile from './pages/Profile/Profile';
import QrScanner from './pages/qrscanner/QrScanner';
import QRGenerate from './pages/QRGenerate/QRGenerate';
import EditDetails from './pages/Profile/EditDetails/EditDetails'
import Register from './pages/Register/Register';
import RegIndividual from './pages/RegIndividual/RegIndividual';
import RegEstab from './pages/RegEstab/RegEstab';
import Login from './pages/Login/Login';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [route, setRoute] = useState('');
  const [user, setUser] = useState(null);

  const url = 'http://localhost:8000/user/'
  

  // LOAD USER
  const loadUser = (userEmail, userPass) => {
    fetch(url)
      .then(res => res.json())  
      .then(data => {
          let userData = data.filter(user => (
            user.email === userEmail 
            && user.password === userPass
          ))
          if(userData && userData.length === 0) {
            alert('Incorrect email or password!')
            setRoute('login')
          } else {
            setUser(userData[0])
            localStorage.setItem('user', JSON.stringify(userData[0]))
            setRoute('profile')
          }   
    })
    
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const onRouteChange = (route) => {
    if (route === 'profile') {
    }
  }

  return (
    <> 
      <Router>
        { user ?
        (
          <div>
            <GlobalStyle />
              <Nav />
                <Switch>
                  <Route exact path="/profile">
                    <Profile user={user} setUser={setUser}/>
                  </Route>
                  <Route path="/qrscan">
                    <QrScanner />
                  </Route>
                  <Route path="/qrgenerate">
                    <QRGenerate/>
                  </Route> 
                  <Route path="/profile/editdetails">
                    {user && <EditDetails user={user} url={url}/>}
                  </Route>
                </Switch>
          </div>
        ) : 
        (
          <Switch>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/register/individual">
                <RegIndividual />
            </Route>
            <Route path="/register/establishment">
                <RegEstab />
            </Route>
            <Route path="/login">
                <Login user={user} setUser={setUser} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} loadUser={loadUser} onRouteChange={onRouteChange} route={route}/>
            </Route>
          </Switch>
        )
        }
        </Router> 
          
       
    </>
  );
}

export default App;
