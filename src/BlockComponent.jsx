import React, { Component } from 'react';
import { getBlock } from './Api';
import GraduateComponent from './GraduateComponent';
import DeleteComponent from './DeleteComponent';

class BlockComponent extends Component {
    state = {
        students: []
    }


    render() {

        return (
            <div>
                <h2>{this.state.students.length}</h2>
                < h1 > {

                    this.state.students.map(student => {
                        return <ul key={student.name}>
                            <li>{student.name}</li>
                            <li>Starting Cohort: {student.startingCohort}</li>
                            <li>{student.currentBlock}</li>
                            {this.props.blockslug !== "graduated" &&
                                <GraduateComponent id={student._id} name={student.name} />
                            }
                            <DeleteComponent id={student._id}/>
                        </ul>
                    })
                }
                </h1>




            </div>
        );
    }
    componentDidMount() {
        this.changeStateStudents();
    }
    changeStateStudents = () => {
        let blockSlug = this.props.blockslug
        getBlock(blockSlug).then((res) => {
            console.log(res);
            let { students } = res;
            this.setState({ students: students })
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.blockslug !== prevProps.blockslug) {
            this.changeStateStudents();
        }

    }
}


export default BlockComponent;