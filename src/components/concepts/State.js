import React from 'react';
import StateExample from './StateExample';

const State = () => {
    return (
        <div className = 'main'>
            <div className='mainDiv'>
                <ul>
                    <dt>useState is UInique to Functional Compnents</dt>
                    <dd>Class componenets have a separate means of using ahd changing state</dd>
                    <dt>useState uses array destructiring</dt>
                    <dd>useState provides a state variable ans a sertstate function</dd>
                    <dt>Is a Hook</dt>
                    <dd>useState is a hook baked in to React</dd>
                    <dt>Triggers Re-render</dt>
                    <dd>Like witjh props changes, changing the state od a component re-renders the whole component.</dd>    
                </ul>
                <StateExample/>
            </div>
        </div>
    );
}

export default State;