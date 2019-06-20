import React, { Component } from "react";
import { getStudents } from "./Api";
import GraduateComponent from './GraduateComponent';

export default class StudentList extends Component {
  state = {
    students: []
  };
  render() {
    console.log(getStudents);
    return (
      <div>
        <h1>Student List</h1>
        <h2>{this.state.students.length}</h2>
        {this.state.students.map(student => {
          return (
            <ul key={student.name}>
              <li>{student.name}</li>
              <li>{student.startingCohort}</li>
              <li>{student.currentBlock}</li>
              <li>{student._id}</li>
              <GraduateComponent id={student._id} name={student.name}/>
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

