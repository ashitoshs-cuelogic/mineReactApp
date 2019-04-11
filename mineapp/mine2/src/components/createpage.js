import React, { Component } from "react";
import AUX from "./../HOC/AUX";
import fire from "./../config/firebase";

import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "font-awesome/css/font-awesome.css";
import FroalaEditor from "react-froala-wysiwyg";

var moment = require("moment");

const initialState = {
  title: "",
  content: "",
  status: "",
  author: "ashitosh",
  createdAt: "",
  updatedAt: "",
  isIndexPage: false,
  error: "",
  success: ""
};

class Createpage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  reset() {
    this.setState(initialState);
  }
  onChangeTrigger = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleModelChange = model => {
    this.setState({ content: model });
  };

  onSubmitCreatepage = e => {
    e.preventDefault();

    var key = "pages/" + this.state.title;
    fire
      .database()
      .ref(key)
      .set({
        title: this.state.title,
        content: this.state.content,
        status: this.state.status,
        created_on: moment().format(),
        updated_on: moment().format()
      })
      .then(data => {
        this.reset();
        this.setState({ success: "Page is saved successfully" });
      })
      .catch(error => {
        console.log("error ", error);
      });
  };

  render() {
    console.log(this.state);
    const { title, content, status, error, success } = this.state;
    return (
      <AUX>
        <form>
          <h1>Create Page</h1>
          {error ? (
            <div>
              <p style={{ color: "red" }}>{error.message}</p>
            </div>
          ) : null}

          {success ? (
            <div>
              <p style={{ color: "green" }}>{success}</p>
            </div>
          ) : null}

          <label htmlFor="title"> Title : </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={this.onChangeTrigger}
          />
          <br />

          <label htmlFor="content"> Content : </label>
          <FroalaEditor
            tag="textarea"
            model={content}
            onModelChange={this.handleModelChange}
          />
          <br />

          <label htmlFor="status"> Status : </label>
          <select name="status" onChange={this.onChangeTrigger}>
            <option>Select Status</option>
            <option
              value="published"
              selected={status == "published" ? "selected" : null}
            >
              Published
            </option>
            <option
              value="on_Hold"
              selected={status == "on_Hold" ? "selected" : null}
            >
              On Hold
            </option>
          </select>
          <br />

          <button onClick={this.onSubmitCreatepage}>Create Page</button>
        </form>
      </AUX>
    );
  }
}

export default Createpage;
