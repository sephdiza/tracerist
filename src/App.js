import React from 'react';

import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
import RegIndivHD from './pages/RegIndivHD/RegIndivHD';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import UpdateHD from './pages/Profile/updateHD/UpdateHD';
import UpdateEstab from './pages/Profile/UpdateEstab/UpdateEstab';

function App() {

  return (
    <>
      <Router>
        <GlobalStyle />         
          <Switch>
            <AuthProvider>
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/qrscan" component={QrScanner}/>
              <PrivateRoute path="/notification" component={Notification}/>
              <PrivateRoute path="/update-profile" component={EditDetails}/>
              <PrivateRoute path="/update-health" component={UpdateHD} />
              <PrivateRoute path="/update-establishment" component={UpdateEstab} />
              <Route path="/register-hd-individual" component={RegIndivHD} />
              <Route path="/register" component={Register} />
              <Route path="/register-individual" component={RegIndividual} />
              <Route path="/register-establishment" component={RegEstab}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot-password" component={ForgotPassword} />
              </AuthProvider>       
          </Switch>  
      </Router>    
    </>
  );
}

export default App;
