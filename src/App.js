import React from 'react';

import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyle';

import PrivateRoute from './PrivateRoute';
import Profile from './pages/Profile/Profile';
import QrScanner from './pages/QrScanner/QrScanner';
import Notification from './pages/Notification/Notification';
import EditDetails from './pages/Profile/EditDetails/EditDetails'
import Register from './pages/Register/Register';
import RegIndividual from './pages/RegIndividual/RegIndividual';
import RegEstab from './pages/RegEstab/RegEstab';
import Login from './pages/Login/Login';
import RegIndivHD from './pages/RegIndivHD/RegIndivHD';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import UpdateHD from './pages/Profile/updateHD/UpdateHD';
import UpdateEstab from './pages/Profile/UpdateEstab/UpdateEstab';
import Visitors from './pages/Visitors/Visitors';
import Visited from './pages/Visited/Visited';
import Landing from './pages/Landing/Landing';
import AdminTrace from './pages/Admin/AdminTrace/AdminTrace';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './pages/ErrorBoundary/ErrorFallback';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Router>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
        >
        <GlobalStyle />         
          <Switch>
            <AuthProvider>
              <Route exact path = "/" component={Landing} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/scan-qr" component={QrScanner}/>
              <PrivateRoute path="/notification" component={Notification}/>
              <PrivateRoute path="/update-profile" component={EditDetails}/>
              <PrivateRoute path="/update-health" component={UpdateHD} />
              <PrivateRoute path="/update-establishment" component={UpdateEstab} />
              <PrivateRoute path="/visitors" component={Visitors} />
              <PrivateRoute path="/visited" component={Visited} />
              <PrivateRoute path="/trace" component={AdminTrace} />
              <Route path="/register-hd-individual" component={RegIndivHD} />
              <Route path="/register" component={Register} />
              <Route path="/register-individual" component={RegIndividual} />
              <Route path="/register-establishment" component={RegEstab}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot-password" component={ForgotPassword} />
              </AuthProvider>       
          </Switch>
          </ErrorBoundary>  
      </Router>
      
      <Footer />    
    </>
  );
}

export default App;
