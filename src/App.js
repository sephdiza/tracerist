import React, { useState, useEffect } from 'react';

import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyle';

import PrivateRoute from './PrivateRoute';
import Profile from './pages/Profile/Profile';
import QrScanner from './pages/qrscanner/QrScanner';
import Notification from './pages/Notification/Notification';
import EditDetails from './pages/Profile/EditDetails/EditDetails'
import Register from './pages/Register/Register';
import RegIndividual from './pages/RegIndividual/RegIndividual';
import RegEstab from './pages/RegEstab/RegEstab';
import Login from './pages/Login/Login';
import HDIndividual from './pages/HDIndividual/HDIndividual';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'

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
        <AuthProvider>
        <GlobalStyle />         
          <Switch>
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route path="/qrscan">
              <QrScanner />
            </Route>
            <PrivateRoute path="/notification" component={Notification}/>
            <PrivateRoute path="/update-profile" component={EditDetails}/>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/register-individual">
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
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>  
        </AuthProvider>       
      </Router>    
    </>
  );
}

export default App;
