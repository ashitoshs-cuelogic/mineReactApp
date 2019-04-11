import React, { Component } from "react";
import fire from "./../config/firebase";
import AUX from "./../HOC/AUX";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeTrigger = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitLogin = e => {
    e.preventDefault();

    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });

    console.log(this.state);
    alert("hi");
  };

  render() {
    console.log(this.state);
    return (
      <AUX>
        <form>
          <h1>Login Page</h1>
          <label htmlFor="email"> Email : </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChangeTrigger}
          />
          <label htmlFor="password"> password : </label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangeTrigger}
          />
          <br />
          <button onClick={this.onSubmitLogin}>Login</button>
        </form>
      </AUX>
    );
  }
}

export default Login;
