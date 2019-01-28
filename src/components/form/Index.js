import React, { Component } from "react";
const initState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};
export default class Index extends Component {
  state = initState;
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validate = () => {
    const { name, email, password } = this.state;
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    if (!name) {
      nameError = "name cannot blank";
    }

    if (!email.includes("@")) {
      emailError = "email invalidate";
    }
    if (password.length < 6) {
      passwordError = "password not safe";
    }
    if (nameError || emailError || passwordError) {
      this.setState({
        nameError,
        emailError,
        passwordError
      });
      return false;
    }
    return true;
  };
  submit = e => {
    e.preventDefault();
    if (this.validate()) {
      console.log(this.state);
    }
    this.setState(initState);
  };
  render() {
    const {
      name,
      email,
      password,
      nameError,
      emailError,
      passwordError
    } = this.state;
    return (
      <form>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <p style={{ color: "red" }}>{nameError}</p>
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <p style={{ color: "red" }}>{emailError}</p>
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <p style={{ color: "red" }}>{passwordError}</p>
        </div>
        <button onClick={this.submit}>提交</button>
      </form>
    );
  }
}
