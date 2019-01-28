import React, { Component } from "react";
import Form from "./Form";
import Todo from "./Todo";
import TodoList from "./TodoList";
import todo from "./Todo";
export default class Index extends Component {
  state = {
    todos: [],
    selectBtn: "all",
    toggleAllComplete: true
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
  filterData = (s = "all") => {
    this.setState({
      selectBtn: s
    });
  };
  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(ele => ele.id !== id)
    });
  };
  removeAllComplete = () => {
    this.setState({
      todos: this.state.todos.filter(ele => !ele.complete)
    });
  };
  toggleAll = () => {
    const { toggleAllComplete, todos } = this.state;
    this.setState({
      todos: todos.map(ele => ({
        ...ele,
        complete: toggleAllComplete
      })),
      toggleAllComplete: !toggleAllComplete
    });
  };
  render() {
    let filterData = [];
    const { selectBtn, todos } = this.state;
    if (selectBtn === "all") {
      filterData = todos;
    } else if (selectBtn === "active") {
      filterData = todos.filter(ele => !ele.complete);
    } else if (selectBtn === "completed") {
      filterData = todos.filter(ele => ele.complete);
    }
    return (
      <div>
        <Form submit={this.handleSubmit} />
        <TodoList
          todos={filterData}
          isComplete={this.isComplete}
          delete={this.deleteTodo}
        />
        <div style={{ marginTop: "30px" }}>
          <button onClick={() => this.filterData()}>all</button>
          <button onClick={() => this.filterData("active")}>active</button>
          <button onClick={() => this.filterData("completed")}>
            completed
          </button>
          <button onClick={this.removeAllComplete}>removeAllComplete</button>
          <button onClick={this.toggleAll}> toggle all</button>
        </div>
      </div>
    );
  }
}
