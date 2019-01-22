import React from 'react'
import { useState,useEffect } from 'react';

import PropTypes from "prop-types";

export default function Clock(props){
  const [count, setCount] = useState(0);
  function countDown() {
   return setCount(pre=>pre+1)
  }

  useEffect(() => {
   let timer = setInterval(()=>{
      countDown();
    },1000);
    return () => {
      setInterval(timer)
    };
  }, []);
  return (
    <div>
      {count}
      {props.num}
    </div>
  );
};

Clock.propTypes={
    num:PropTypes.number,
}
