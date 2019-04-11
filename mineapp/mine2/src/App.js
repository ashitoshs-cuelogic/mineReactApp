import React, { Component } from "react";
// import Login from "./components/login";
// import Register from "./components/register";
// import CreatePage from "./components/createpage";
// import EditPage from "./components/editpage";
import ShowPages from "./components/showpages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <EditPage /> */}

            <ShowPages />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
