import React from 'react';
import Geolocation from './Geolocation'
import Scanner from './Scanner'
import AugmentedReality from './AugmentedReality'
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
          </Tabs>
      </div>
    );
}

export default App;
