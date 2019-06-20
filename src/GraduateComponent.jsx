import React from 'react';
import axios from 'axios';
import { determineGraduation } from './Api';

const GraduateComponent = (props) => {
console.log(props);
console.log(determineGraduation)
    return (
        <div>
            <button onClick={() => { determineGraduation(props.id, true) }}>Graduate</button>
            <button onClick={() => { determineGraduation(props.id, false) }}>Do Not Graduate</button>
        </div>
    );
};

export default GraduateComponent;