/**
 * Created by Toha on 12.03.2017.
 */
import React, {Component} from 'react';
import PreviewItem from './PreviewItem';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        items: state.items,
        items_in_cart: state.cart.get('items')
    };
}

class Cart extends Component {
    render() {
        console.log(this.props.items);
        return (
            <div className="Cart">
                <div className="Cart__container">
                    {this.props.items_in_cart.valueSeq().map(item =>
                        <PreviewItem key={item.get('id')}
                                     img_src={this.props.items.get('' + item.get('id')).get('img_src')}/>
                    )}
                </div>


            </div>
        );
    }
}
export default connect(mapStateToProps)(Cart);