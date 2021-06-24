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
import { formatDiagnosticsWithColorAndContext } from 'typescript';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [route, setRoute] = useState('signin');
  const [user, setUser] = useState(null);

  const url = 'http://localhost:8000/user/';


  // LOAD USER
  useEffect(() => {
      fetch(url)
          .then(res =>res.json())
          .then(data => {
              setUser(data[1])
          })
  },[])

  return (
    <> 
      <Router>
        { isSignedIn ? 
        (
          <div>
            <GlobalStyle />
              <Nav />
                <Switch>
                  <Route exact path="/">
                    <Profile user={user}/>
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
                <Login />
            </Route>
          </Switch>
        )
        }
        </Router> 
          
       
    </>
  );
}

export default App;
