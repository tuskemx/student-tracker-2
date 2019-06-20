import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';
import { postStudent } from './Api';

class AddStudent extends Component {
    state = {
        name: '',
        startingCohort: '',
        personBool: false
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Name
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
                    </label>
                    <label> startingCohort
                        <input name="startingCohort" type="number" value={this.state.startingCohort} onChange={this.handleChange}></input>
                    </label>
                    <button>Submit</button>
                </form>
                <br></br>
                {this.state.personBool &&
                    <b><i>Thank for {this.state.name}</i></b>
                }

            </div>
        );
    }
    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();

        let person = {
            "name": this.state.name,
            "startingCohort": this.state.startingCohort
        }
        

        postStudent(person).then((res) => {
      
            if (res.status === 201) {
                this.setState({ personBool: true })
            }

        })
    }

}

export default AddStudent;