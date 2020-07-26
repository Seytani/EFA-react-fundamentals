import React, { useState, useEffect } from 'react';

const SampleEffect = () => {
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (timerRunning) {
            timer = window.setTimeout(() => {
                console.log('the timer expired', Date.now()/1000);
                setTimerRunning(false);
            }, 2000)
        }
        return () => {window.clearTimeout(timer); console.log('the timer was cleaned up', Date.now()/1000);};
    });

    useEffect(() => {console.log('There has been a state change, timerRunning variable is ', timerRunning)}); 
    let buttonHandler = () => { if (!timerRunning) setTimerRunning(true) };

    return (
        <div style={{ border: '1px dashed black' }}>
            <h2>This component demoes the ecsffect</h2>
            <button onClick={buttonHandler}>Click me to start an effect in the console</button>
        </div>
    );
}


export default SampleEffect;