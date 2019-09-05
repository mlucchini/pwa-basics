import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavTab } from "react-router-tabs";
import Geolocation from './Geolocation';
import Scanner from './Scanner';
import AugmentedReality from './AugmentedReality';
import Payment from './Payment';
import InstallationPrompt from './InstallationPrompt';
import LocalNotifications from './LocalNotifications';
import './App.css';
import 'react-router-tabs/styles/react-router-tabs.css';

const history = createBrowserHistory();

const App = () => {
    return (
      <div className="App">
          <Router history={history}>
              <NavTab to="/geolocation" replace={false}>Geolocation</NavTab>
              <NavTab to="/scanner" replace={false}>Scanner</NavTab>
              <NavTab to="/ar" replace={false}>AR</NavTab>
              <NavTab to="/payment" replace={false}>Payment</NavTab>
              <NavTab to="/notifications" replace={false}>Notifications</NavTab>
              <Switch>
                  <Route path={'/geolocation'} component={Geolocation} />
                  <Route path={'/scanner'} component={Scanner} />
                  <Route path={'/ar'} component={AugmentedReality} />
                  <Route path={'/payment'} component={Payment} />
                  <Route path={'/notifications'} component={LocalNotifications} />
              </Switch>
          </Router>
          <InstallationPrompt/>
      </div>
    );
}

export default App;
