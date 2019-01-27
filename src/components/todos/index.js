import React, { Component } from "react";
import Form from "./Form";
import Todo from "./Todo";
import TodoList from "./TodoList";
export default class Index extends Component {
  state = {
    todos: []
  };
  handleSubmit = data => {
    this.setState({
      todos: [...this.state.todos, data]
    });
  };
  isComplete = id => {
    this.setState({
      todos: this.state.todos.map(ele =>
        ele.id === id ? { ...ele, complete: !ele.complete } : ele
      )
    });
  };
  render() {
    console.log(this.state.todos);
    return (
      <div>
        <Form submit={this.handleSubmit} />
        <TodoList todos={this.state.todos} isComplete={this.isComplete} />
      </div>
    );
  }
}
