import React, { Component } from "react";
import PropTypes from "prop-types";

export class Clock extends Component {
  static propTypes = {
    startTime:PropTypes.number,
    endTime: PropTypes.number
  };
  static defaultProps = {
    startTime: 0,
    endTime: 0,
    nowTime: new Date().getTime()
  };
  state = {
    count: 0
  };
  componentWillMount(){
    this.countDown();
  }
  componentDidMount() {
    this.tiemr = setInterval(() => {
      this.countDown();
    }, 1000);
  }

  countDown = () => {
    this.setState({
      nowTime: new Date().getTime()
    });
  };
  format = (now, end) => {
    const delta = (end - now) / 1000;
    const hour = Math.floor(delta / 3600);
    const minute = Math.floor((delta - hour * 3600) / 60);
    const second = Math.floor(delta - hour * 3600 - minute * 60);
    return [hour,minute,second].map((ele)=>{
      return ele<10?`0${ele}`:ele;
    }).join(":");
  };
  componentWillUnmount() {
    setInterval(this.tiemr);
  }
  render() {
    const { nowTime } = this.state;
    const { endTime,startTime } = this.props;
    let diff;
    if(startTime>nowTime){
      diff = "未开始"
    }else if(nowTime>endTime){
      diff = "已结束"
      setInterval(this.tiemr);
    }else{
      diff = this.format(nowTime, endTime);
    }
    return <div>{diff}</div>;
  }
}

export default Clock;
