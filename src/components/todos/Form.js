import React, { Component } from "react";
import shortid from "shortid";
export default class Form extends Component {
  state = {
    text: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      return;
    }
    this.props.submit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({ text: "" });
  };
  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleText}
            placeholder="todo..."
          />
          <button>add</button>
        </form>
      </div>
    );
  }
}
