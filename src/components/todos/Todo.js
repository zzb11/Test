import React from "react";

const todo = props => {
  return (
    <div
      style={{
        textDecoration: props.complete ? "line-through" : ""
      }}
      onClick={() => props.isComplete(props.id)}
    >
      {props.text}
    </div>
  );
};

export default todo;
