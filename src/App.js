import React, { useState, useEffect } from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

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
                    {user ? <Profile user={user} setUser={setUser}/> : <Redirect to="/login" />}
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
        ) : (
          <div>
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
