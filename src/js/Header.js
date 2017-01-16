/**
 * Created by Toha on 16.01.2017.
 */
import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__row Header__row--top"></div>
                <div className="Header__row Header__row--bottom"></div>
            </div>
        );
    }
}

export default Header;
