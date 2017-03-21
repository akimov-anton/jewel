/**
 * Created by Toha on 16.01.2017.
 */
import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';


function mapStateToProps(state) {
    return {
        cartItemsCount: state.cart.get('items') ? state.cart.get('items').count() : 0,
        collections: state.collections
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
                            <li className="Header__menu_li">
                                <IndexLink to='/' className="Header__menu_link">Home</IndexLink>
                            </li>
                            <li className="Header__menu_li">
                                <a href="#" className="Header__menu_link">About</a>
                            </li>
                            <li className="Header__menu_li">
                                <span className="Header__menu_link">Collections</span>

                                <ul className="Header__drop_down_menu">
                                    {this.props.collections.map(item =>
                                        <li className="Header__drop_down_menu_li" key={item.get('id')}>
                                            <Link to={{pathname: `/collection/${item.get('name')}`}} className="Header__menu_link">
                                                {item.get('name')}
                                            </Link>
                                        </li>
                                    )}
                                </ul>

                            </li>
                            <li className="Header__menu_li">
                                <a href="#" className="Header__menu_link">Store location</a>
                            </li>
                            <li className="Header__menu_li">
                                <a href="#" className="Header__menu_link">Contacts</a>
                            </li>
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