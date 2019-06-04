import React, { Component } from 'react';
import MapBox from './containers/MapBoxContainer';
import SideBar from './containers/SideBarContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MapBox />
        <SideBar />
      </React.Fragment>
    );
  }
}

export default App;
