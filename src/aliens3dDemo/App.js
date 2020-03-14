/*
 * @Author: g05047
 * @Date: 2020-01-10 21:05:48
 * @LastEditors: g05047
 * @LastEditTime: 2020-03-14 15:54:25
 * @Description: file content
 */
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // var viewer = new Cesium.Viewer('map-container');
    // var blueBox = viewer.entities.add({
    //     name : 'Blue box',
    //     position: Cesium.Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),
    //     box : {
    //         dimensions : new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
    //         material : Cesium.Color.BLUE
    //     }
    // });
    // viewer.zoomTo(viewer.entities);
  }
  render() {
    return (
      <div className="App">
        aliens3dDemo
      </div>
    )
  }
}

export default App;
