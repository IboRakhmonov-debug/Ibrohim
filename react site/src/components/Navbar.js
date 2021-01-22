import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../variables.scss';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="bg-dark p-3 ">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
            </div>
        )
    }
}
