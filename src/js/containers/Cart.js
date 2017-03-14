/**
 * Created by Toha on 12.03.2017.
 */
import React, {Component} from 'react';
import CartItem from './CartItem';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        items: state.items,
        items_in_cart: state.cart.get('items')
    };
}

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <div className="Cart__container">
                    {
                        (this.props.items_in_cart && this.props.items_in_cart.count()) &&
                        this.props.items_in_cart.valueSeq().map(item =>
                            <CartItem key={item.get('id')} id={item.get('id')}/>
                        )
                    }
                </div>


            </div>
        );
    }
}
export default connect(mapStateToProps)(Cart);