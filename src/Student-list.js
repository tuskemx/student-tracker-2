import React, { Component } from "react";
import { getStudents } from "./Api";

export default class StudentList extends Component {
  state = {
    students: []
  };
  render() {
    console.log(getStudents);
    return (
      <div>
        <h1>Student List</h1>
        {this.state.students.map(student => {
          return (
            <ul>
              <li>{student.name}</li>
              <li>{student.startingCohort}</li>
              <li>{student.currentBlock}</li>
              <li>{student._id}</li>
            </ul>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    getStudents().then(data => this.setState({ students: data.students }));
  }
}
