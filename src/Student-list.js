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
              <button>Graduate</button>
              <button>Do not Graduate</button>
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
