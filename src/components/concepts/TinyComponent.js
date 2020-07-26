import React from 'react';

const TinyComponent = (props) => {

    return (
        <div className='main'>
            <div className='mainDiv'>
    <p>The current style is {props.selectedStyle}</p>
            </div>
        </div>
    );
};

export default TinyComponent;