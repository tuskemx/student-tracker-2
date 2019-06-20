
import { determineGraduation } from './Api';
import React, { Component } from 'react';

class GraduateComponent extends Component {
    state = {
       graduateBool: false
    }
    render() {

        return (
            <div>
                <button onClick={() => { determineGraduation(this.props.id, true, this.props.name) }}>Graduate</button>
                <button onClick={() => { determineGraduation(this.props.id, false, this.props.name) }}>Do Not Graduate</button>
            </div>
        );
    };
}

export default GraduateComponent;