import React, { Component } from 'react'
import Clock from './components/Clock';
import ClockHooks from './components/ClockHooks';
import { Button } from 'antd';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Clock endTime={new Date("2019-01-22 15:00:00").getTime()} startTime={new Date("2019-01-22 14:00:00").getTime()}></Clock> */}
      <ClockHooks num={"dd"}></ClockHooks>
       {/* <Button type="primary">Button</Button> */}
      </div>
    );
  }
}

export default App;
