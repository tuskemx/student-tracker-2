import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import Header from "./Header";
import StudentList from "./Student-list";
import Block from "./Block";
import AddStudent from './AddStudent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddStudent />
        <Router>

          <StudentList path="/student-list" />
          <Block path="/block/*" />

        </Router>
      </div>
    );
  }
}

export default App;
