import React from 'react';

import './UserOutut.css';

const userOutput = (props) => {
    return (
        <div className="Useroutput">
            <p>A paragraph is a series of related sentences
                thematic unity: {props.name}</p>
            <p>a paragraph is a sentence or a group of
                a time to your broader argument.</p>
        </div>
    )
};

export default userOutput;