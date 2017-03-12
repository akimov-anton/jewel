/**
 * Created by Toha on 16.01.2017.
 */
import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';


function mapStateToProps(state) {
    return {
        cartItemsCount: state.cart.get('items') ? state.cart.get('items').count() : 0
    };
}

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
                            <Link to="/cart">
                                <div className="Header__mini_cart">
                                    <div className="Header__mini_cart_icon"></div>
                                    <div className="Header__mini_cart_text">
                                        My bag ({this.props.cartItemsCount}) items
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="Header__row Header__row--bottom">
                    <div className="Header__container">
                        <ul className="Header__menu">
                            <li className="Header__menu_li"><IndexLink to='/'>Home</IndexLink></li>
                            <li className="Header__menu_li"><a href="#">About</a></li>
                            <li className="Header__menu_li">
                                <Link to='/collections'>Collections</Link>

                                <ul className="Header__drop_down_menu">
                                    <li className="Header__drop_down_menu_li"><a href="#">SWAROVSKI CRYSTAL CHOKERS</a></li>

                                    <li className="Header__drop_down_menu_li"><a href="#">2</a></li>
                                    <li className="Header__drop_down_menu_li"><a href="#">3</a></li>
                                    <li className="Header__drop_down_menu_li"><a href="#">4</a></li>

                                </ul>

                            </li>
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

export default connect(mapStateToProps)(Header);
