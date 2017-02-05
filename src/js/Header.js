/**
 * Created by Toha on 16.01.2017.
 */
import React, {Component} from 'react';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__row Header__row--top">
                    <div className="Header__top_right_block">
                        <div className="Header__top_links"></div>
                        <div className="Header__mini_cart"></div>
                    </div>
                </div>
                <div className="Header__row Header__row--bottom">
                    <ul className="Header__menu">
                        <li className="Header__menu_li">Home</li>
                        <li className="Header__menu_li">About</li>
                        <li className="Header__menu_li">Collections</li>
                        <li className="Header__menu_li">Store location</li>
                        <li className="Header__menu_li">Contacts</li>
                    </ul>

                    <input type="text" name="search" className="Header__search" placeholder="Keyword or product code"/>
                    <span className="Header__search_icon"></span>

                </div>
            </div>

        );
    }
}

export default Header;
