/**
 * Created by Toha on 16.02.2017.
 */

import React, {Component} from 'react';
class Item extends Component {
    render() {
        return (
            <div className="Item">
                <div className="Item__row Item__row--top">
                    <div className="Item__container">
                        <div className="Item__top_image"></div>

                    </div>
                </div>
                <div className="Item__row Item__row--menu">
                    <div className="Item__container">
                        <ul className="Item__menu">
                            <li className="Item__menu_li"><a href="#">text</a></li>
                            <li className="Item__menu_li"><a href="#">text</a></li>
                            <li className="Item__menu_li"><a href="#">text</a></li>
                        </ul>
                    </div>
                </div>
                <div className="Item__row Item__row--content">
                    <div className="Item__container">
                        <div className="Item_slider">
                            123
                        </div>

                        <div className="Item__content">12312334</div>






                    </div>
                </div>
            </div>
        );
    }
}

export default Item;