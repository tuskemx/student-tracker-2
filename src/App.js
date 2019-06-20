import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import Header from "./Header";
import StudentList from "./Student-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <StudentList path="/student-list" />
        </Router>
      </div>
    );
  }
}

export default App;
