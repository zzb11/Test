import React from "react";

const todo = props => {
  return (
    <div>
      <div
        style={{
          display: "inline-block",
          textDecoration: props.complete ? "line-through" : ""
        }}
        onClick={() => props.isComplete(props.id)}
      >
        {props.text}
      </div>

      <button onClick={() => props.delete(props.id)}>xxx</button>
    </div>
  );
};

export default todo;
