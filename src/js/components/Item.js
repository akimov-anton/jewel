/**
 * Created by Toha on 16.02.2017.
 */

import React, {Component} from 'react';
import StarRating from './StarRating';
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

                        <div className="Item__content">
                            <div className="Item__title">FERN CLAMPER BRACELET</div>
                            <div className="Item__short_description_block">
                                <div className="Item__short_description_title">Description:</div>
                                <div className="Item__short_description">
                                    Mexican Silver Fern Clamper Bracelet. 7 1/4INCH
                                </div>
                            </div>
                            <hr className="Item__splitter"/>
                            <div className="Item__rating_block">
                                <StarRating/>
                            </div>
                            <hr className="Item__splitter"/>
                            <div className="Item__order_block">
                                <div className="Item__order_left_block">
                                    <div className="Item__order_key">Product code</div>
                                    <div className="Item__order_value">C425001A</div>
                                    <div className="Item__order_key">Best price</div>
                                    <div className="Item__order_value">$ 820.00</div>
                                </div>
                                <div className="Item__order_right_block">
                                    <button className="Item__add_to_cart_btn">Add to cart</button>
                                </div>
                            </div>
                            <hr className="Item__splitter"/>
                            <div className="Item__more_description_block">
                                <div className="Item__more_description_title">
                                    More Description:
                                </div>
                                <div className="Item__description_block">
                                    <div className="Item__description_block_name">
                                        Style note
                                    </div>
                                    <div className="Item__description_text">
                                        Lorem Ipsums simply
                                    </div>
                                </div>
                                <div className="Item__description_block Item__description_block--minimized">
                                    <div className="Item__description_block_name">
                                        Style note
                                    </div>
                                    <div className="Item__description_text">
                                        Lorem Ipsums simply
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;