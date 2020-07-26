import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PropsDemoChild from './PropsDemoChild';


const PropsDemo = () => {
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius, 
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    }

    const toggleColor = () => color === 'white' ? setColor('pink'): setColor('white');
    const toggleBackgroundColor = () => backgroundColor === 'purple' ? setBackgroundColor('yellow'): setBackgroundColor('purple');
    const toggleBorderRadius = () => borderRadius === '5px' ? setBorderRadius('30px'): setBorderRadius('5px');
    const toggleBorderStyle = () => borderStyle === 'dashed' ? setBorderStyle('double'): setBorderStyle('dashed');

    return (
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                    <PropsDemoChild string='Sean sells sea shells' function={toggleColor} selectedStyle={color}/>
                    <PropsDemoChild string='over' function={toggleBackgroundColor} selectedStyle={backgroundColor}/>
                    <PropsDemoChild string='the' function={toggleBorderRadius} selectedStyle={borderRadius}/>
                    <PropsDemoChild string='sea shore' function={toggleBorderStyle} selectedStyle={borderStyle}/>
                </div>
            </div>
        </div>
    );
};

PropsDemoChild.defaultProps = {
    string: 'Default value of string props in PDC',
    function: () => console.log('This is the default value for function on PDC'),
    selectedStyle: 'defaul style for props PDC'
}

PropsDemoChild.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired,
}

export default PropsDemo;