import React from 'react';

const validate = (props) => {
    return (
        <div>
            {
            props.inputlength > 6 ?
                    <p>Text long</p> :
                    <p>Text short</p>
            }
        </div>
    );
};

export default validate;