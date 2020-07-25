import React, { useState, useEffect } from 'react';

const SampleEffect = () => {
    const [timerRunning, setTimerRunning] = useState(false);
    useEffect(()=> { console.log('we initiated a state change')});

    let buttonHandler = () => {if (!timerRunning) setTimerRunning(true)};

    return (
        <div style={{border: '1px dashed black'}}>
            <h2>This component demoes the ecsffect</h2>
            <button onClick={buttonHandler}>Click me to start an effect in the console</button>
        </div>
    );
}


export default SampleEffect;