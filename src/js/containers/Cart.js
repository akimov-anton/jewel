/**
 * Created by Toha on 12.03.2017.
 */
import React, {Component} from 'react';
import CartItem from './CartItem';
import {connect} from 'react-redux';

import {getItem} from '../actions/items';
import {removeItem} from '../actions/cart';

function mapStateToProps(state) {
    return {
        items: state.items,
        items_in_cart: state.cart.get('items')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getItemById(id) {
            dispatch(getItem(id));
        },
        removeItem(id) {
          dispatch(removeItem(id));
        }
    }
}

class Cart extends Component {
    constructor(props) {
        super(props);
        let totalPrice = 0;
        if (props.items_in_cart && props.items_in_cart.size) {

            let items = props.items_in_cart.toJS();
            totalPrice = this.calculateTotalPrice(items);

        }
        this.state = {
            totalPrice,
            items: []
        };

        this.removeItem = this.removeItem.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items_in_cart.size) {
            nextProps.items_in_cart.map(item => {
                nextProps.getItemById(item.get('id'));
            });
        }
    }

    calculateTotalPrice(items) {
        if (!items.length) {
            return 0;
        }
        return items.reduce((sum, item) => sum + +this.getItemPriceById(item.id) * +item.count, 0);
    }

    getTotalPrice() {
        if (this.props.items_in_cart
            && this.props.items_in_cart.size
            && this.props.items
            && this.props.items.size) {
            return this.calculateTotalPrice(this.props.items_in_cart.toJS());
        }
        return 0;
    }

    getItemInfoById(id, items) {
        return items.find(item => item.get('id') == id);
    }

    getItemPriceById(id) {
        if (this.props.items && this.props.items.size) {
            let item = this.props.items.find(item => item.get('id') === id);
            if (item) {
                return item.get('price');
            }
        }
    }

    getItems() {
        if (this.props.items_in_cart
            && this.props.items_in_cart.size
            && this.props.items.size
            && this.props.items.size >= this.props.items_in_cart.size) {
            return this.props.items_in_cart.toArray();
        } else {
            return false;
        }
    }

    removeItem(id) {
        this.props.removeItem(id);
    }

    render() {
        return (
            <div className="Cart">
                <div className="Cart__container">
                    {this.getItems() &&
                    this.getItems().map(item => {
                            let info = this.getItemInfoById(item.get('id'), this.props.items);
                            return <CartItem
                                key={info.get('id')}
                                itemId={info.get('id')}
                                title={info.get('title')}
                                price={info.get('price')}
                                img_src={info.get('images').first()}
                                count={item.get('count')}
                                onRemove={this.removeItem}
                            />
                        }
                    )
                    }

                    <div className="Cart__total_block">
                        <div className="Cart__total_price_text">
                            Total price:
                        </div>
                        <div className="Cart__total_price_value">
                            {this.getTotalPrice()}
                        </div>
                        <div className="Cart__pay_btn_block">
                            <button className="Cart__pay_btn">Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);