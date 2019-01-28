import React, { Component } from "react";
import Todo from "./Todo";
export default class TodoList extends Component {
  render() {
    return (
      <>
        {this.props.todos.map(ele => (
          <Todo
            // text={ele.text}
            {...ele}
            key={ele.id}
            // id={ele.id}
            // complete={ele.complete}
            isComplete={id => this.props.isComplete(id)}
            delete={id => this.props.delete(id)}
          />
        ))}
      </>
    );
  }
}
