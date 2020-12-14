import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact-form/Contact';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          

        </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          
          
      </div>
    );
  }
}

export default App;