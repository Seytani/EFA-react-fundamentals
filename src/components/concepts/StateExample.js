import React, {useState} from 'react';

const StateExample = () => {
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    const [color, setColor] = useState('blue');

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/><br/>
            <img style={{width: '100px', height:'100px'}} src='https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png' onClick={e => setLikeNum(likeNum + 1)}/>
            <span>{likeNum}</span>
            <p style={{color: color}}  onMouseOver={e => setColor('red')} onMouseLeave={e => setColor('blue')}> This should change color on enter and leave</p>
        </div>
    );
}

export default StateExample;