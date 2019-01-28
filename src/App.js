import React, { Component } from "react";
import Clock from "./common/Clock/Clock";
import ClockHooks from "./common/Clock/ClockHooks";
import Upload from "./common/Upload/Upload";
import { Button } from "antd";
import Todos from "./components/todos/index";
import Form from "./components/form/Index";
import "./App.css";
class App extends Component {
  render() {
    // this.ck();
    return (
      <div className="App">
        {/* <Upload></Upload> */}
        {/* <Clock endTime={new Date("2019-01-22 15:00:00").getTime()} startTime={new Date("2019-01-22 14:00:00").getTime()}></Clock> */}
        {/* <ClockHooks num={"dd"}></ClockHooks> */}
        {/* <Button type="primary">Button</Button> */}
        {/* <Todos /> */}
        <Form />
      </div>
    );
  }
}

export default App;
