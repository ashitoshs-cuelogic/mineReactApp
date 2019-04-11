import React, { Component } from "react";
import AUX from "./../HOC/AUX";
import fire from "./../config/firebase";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullname: "",
      password: "",
      error: ""
    };
  }

  onChangeTrigger = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitRegister = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });

    console.log(this.state);
    alert("hi");
  };

  render() {
    const { email, fullname, password, error } = this.state;
    console.log(this.state);
    return (
      <AUX>
        <form>
          <h1>Register Page</h1>

          {error ? (
            <div>
              <p>{error.message}</p>
            </div>
          ) : null}

          <label htmlFor="email"> Email : </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.onChangeTrigger}
          />
          <label htmlFor="fullname"> Full Name : </label>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={this.onChangeTrigger}
          />
          <label htmlFor="fullname"> Password : </label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.onChangeTrigger}
          />

          <br />
          <button onClick={this.onSubmitRegister}>Register</button>
        </form>
      </AUX>
    );
  }
}

export default Register;
