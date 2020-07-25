import React from 'react';
import SampleEffect from './SampleEffect';

const Effects = () => {

    return (
        <div className="main">
            <div className="mainDiv">
                <h2>Below are some important points regarding effects</h2>
                <ul>
                    <li>They are triggered with state and prop updates, as well as after initial render to the DOM</li>
                    <li>Effects are used to trigger certain actions based upon changes to the component</li>
                    <li>Effects can return cleanup functions, which can clean up times using memory, listeners to outside APIs, and otgher functions which mau use sysyem resources</li>
                </ul>
                <SampleEffect/>
                <br/>
                <SampleEffect/>
            </div>
        </div>);
}


export default Effects;