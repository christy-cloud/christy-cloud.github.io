import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => { 
    return (
        <div class="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
        </div>

        
    );
}

export default Navigation;