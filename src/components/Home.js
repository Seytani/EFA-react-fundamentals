import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum blandit urna placerat posuere. Fusce ex ex, ultricies eget pretium non, posuere non lacus. Etiam nec ligula ac sem fringilla finibus vel et ante. Sed ornare dui quis nisl condimentum tempus. Morbi euismod eu est pellentesque faucibus. Pellentesque dapibus velit ac malesuada fermentum. Proin aliquam lectus sit amet ipsum vulputate pharetra quis a risus. Proin at posuere est. Quisque rutrum nunc eget augue varius, eu tincidunt augue interdum.
                </p>
            <hr/>
            <h1>Important Notes</h1>
            <ul>
                <li>Being component based, you can moce to the next module</li>
                <li>Bla blah bleh</li>
                <li>Bli bleh bli blah</li>
                <li>Bli bli bleh bli bleh</li>
                <li>Bla bla blada blada</li>
                <li><Link to="/src/components/Resources.js">Resources</Link></li>
                <li>Bla bleh bli bleh.</li>
            </ul>
            </div>
        </div>
    );

}

export default Home;