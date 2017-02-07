/**
 * Created by Toha on 16.01.2017.
 */
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__row Header__row--top">
                    <div className="Header__container">
                        <div className="Header__top_left_logo">
                            <span>Marevo</span>

                        </div>
                        <div className="Header__top_right_block">
                            <ul className="Header__top_links">
                                <li className="Header__top_link">
                                    Login
                                </li>
                                <li className="Header__top_link">
                                    Help
                                </li>
                            </ul>
                            <div className="Header__mini_cart">
                                <div className="Header__mini_cart_icon"></div>
                                <div className="Header__mini_cart_text">
                                    My bag (0) items
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Header__row Header__row--bottom">
                    <div className="Header__container">
                        <ul className="Header__menu">
                            <li className="Header__menu_li"><a href="#">Home</a></li>
                            <li className="Header__menu_li"><a href="#">About</a></li>
                            <li className="Header__menu_li"><a href="#">Collections</a></li>
                            <li className="Header__menu_li"><a href="#">Store location</a></li>
                            <li className="Header__menu_li"><a href="#">Contacts</a></li>
                        </ul>

                        <div className="Header__search_wrapper">
                            <input type="text" name="search" className="Header__search" placeholder="Keyword or product code"/>
                            <span className="Header__search_icon"></span>
                        </div>




                    </div>
                </div>
            </div>

        );
    }
}

export default Header;
