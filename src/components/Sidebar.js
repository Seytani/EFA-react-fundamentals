import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from './concepts/FunctionalComponentDemo';
import JSXRules from './concepts/JSXRules';
import CreateElement from './concepts/CreateElement';
import State from './concepts/State';
import Effects from './concepts/Effects';
import PropsDemo from './concepts/PropsDemo';

const Sidebar = () => {
    return (
    <div className="sidebar">
        <div className="sidebar-list-styling">
        <ul className="sidebar-list-unstyled">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/functionalcomponent">Functional Component</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/jsxrules">JSX Rules</Link></li>
            <li><Link to="/actualjs">Actual JS</Link></li>
            <li><Link to="/usestate">Use State</Link></li>
            <li><Link to="/effects">Effects</Link></li>
            <li><Link to="/props">Props</Link></li>
        </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home/></Route>
                <Route exact path="/resources"><Resources/></Route>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/functionalcomponent"><FunctionalComponentDemo/></Route>
                <Route exact path="/jsxrules"><JSXRules/></Route>
                <Route exact path="/actualjs"><CreateElement/></Route>
                <Route exact path="/usestate"><State/></Route>
                <Route exact path="/effects"><Effects/></Route>
                <Route exact path="/props"><PropsDemo/></Route>
            </Switch>
        </div>
    </div>
        );
}

export default Sidebar;