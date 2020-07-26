import React from 'react';
import TinyComponent from './TinyComponent';


const PropsDemoChild = (props) => {

    return (
        <div className='main'>
            <div className='mainDiv'>
                <p>{props.string}</p>
                <button onClick={props.function}>Picame, right here.</button>
                <TinyComponent selectedStyle={props.selectedStyle}/>
            </div>
        </div>
    );
};



export default PropsDemoChild;