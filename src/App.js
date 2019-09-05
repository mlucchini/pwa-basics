import React from 'react';
import Geolocation from './Geolocation';
import Scanner from './Scanner';
import AugmentedReality from './AugmentedReality';
import Payment from './Payment';
import InstallationPrompt from './InstallationPrompt';
import LocalNotifications from './LocalNotifications';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';
import 'react-tabs/style/react-tabs.css';

function App() {
    return (
      <div className="App">
          <Tabs>
              <TabList>
                  <Tab>Geolocation</Tab>
                  <Tab>Scanner</Tab>
                  <Tab>AR</Tab>
                  <Tab>Payment</Tab>
                  <Tab>Push</Tab>
              </TabList>
              <TabPanel>
                  <Geolocation/>
              </TabPanel>
              <TabPanel>
                  <Scanner/>
              </TabPanel>
              <TabPanel>
                  <AugmentedReality/>
              </TabPanel>
              <TabPanel>
                  <Payment/>
              </TabPanel>
              <TabPanel>
                  <LocalNotifications/>
              </TabPanel>
          </Tabs>
          <InstallationPrompt/>
      </div>
    );
}

export default App;
