import React from 'react';
import { deleteStudent } from './Api';




const DeleteComponent = (props) => {
    return (
        <div>
            <button onClick={() => { deleteStudent(props.id) }}>Remove Student</button>
        </div>
    );
};

export default DeleteComponent;