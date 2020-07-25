import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import FunctionalComponentDemo from './components/concepts/FunctionalComponentDemo'
import { BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </Fragment>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <FunctionalComponentDemo/>
//       </div>
//     );
//   }
// }

export default App;
