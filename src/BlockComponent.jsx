import React, { Component } from 'react';
import { getBlock } from './Api';
import GraduateComponent from './GraduateComponent';

class BlockComponent extends Component {
    state = {
        students: []
    }


    render() {

        return (
            <div>

                < h1 > {
                    this.state.students.map(student => {
                        return <ul key={student.name}>
                            <li>{student.name}</li>
                            <li>Starting Cohort: {student.startingCohort}</li>
                            <li>{student.currentBlock}</li>
                            <GraduateComponent id={student._id} />
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