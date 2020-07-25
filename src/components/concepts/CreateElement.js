import React from 'react';

const CreateElement = () => {
    return (
        React.createElement('div', {id: 'parentdiv'}, 
        React.createElement('h1', null, 'CreateElement Comp'), 
        React.createElement('p', null, 'This was constructed with Actual JS in the return.'),
        React.createElement('img', {src: 'https://cdn5.vectorstock.com/i/1000x1000/33/84/kawaii-computer-icon-vector-10093384.jpg', alt: 'some pic'}, null))
    );
};

export default CreateElement;