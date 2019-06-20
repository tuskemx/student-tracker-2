import React, { Component } from "react";
import { getStudents } from "./Api";

export default class Block extends Component {
  state = {
    studentsByBlock: []
  };
  render() {
    return <div />;
  }
  componentDidMount() {
    getStudents().then(data => this.setState({ students: data.students }));
  }
}
