import React, { useState, useEffect } from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyle';

import Nav from './components/Nav';
import Profile from './pages/Profile/Profile';
import QrScanner from './pages/qrscanner/QrScanner';
import Notification from './pages/Notification/Notification';
import EditDetails from './pages/Profile/EditDetails/EditDetails'
import Register from './pages/Register/Register';
import RegIndividual from './pages/RegIndividual/RegIndividual';
import RegEstab from './pages/RegEstab/RegEstab';
import Login from './pages/Login/Login';
import HDIndividual from './pages/HDIndividual/HDIndividual';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [route, setRoute] = useState('');
  const [user, setUser] = useState(null);

  const url = 'http://localhost:8000/user/'
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <> 
      <Router>
        <GlobalStyle />
        { user ?
        (
          <div>
            
              <Nav />
                <Switch>
                  <Route exact path="/profile">
                    <Profile user={user} setUser={setUser}/>
                  </Route>
                  <Route path="/qrscan">
                    <QrScanner />
                  </Route>
                  <Route path="/notification">
                    <Notification/>
                  </Route> 
                  <Route path="/profile/editdetails">
                    {user && <EditDetails user={user} url={url}/>}
                  </Route>
                </Switch>
          </div>
        ) : (
          <div>
            <Switch>
                <Route exact path="/register">
                  <Register />
                </Route>
                <Route path="/register/individual">
                    <RegIndividual />
                </Route>
                <Route path="/register/health-declaration">
                    <HDIndividual />
                </Route>
                <Route path="/register/establishment">
                    <RegEstab />
                </Route>
                <Route path="/login">
                    <Login user={user} setUser={setUser} route={route} url={url}/>
                </Route>
            </Switch>
          </div>
        )
          
        }
             
        </Router> 
    </>
  );
}

export default App;
