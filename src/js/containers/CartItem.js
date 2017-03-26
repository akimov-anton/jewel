/**
 * Created by Toha on 12.03.2017.
 */
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import Switch from '../components/Switch';

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items,
        cart: state.cart
    }
};

class CartItem extends Component {
    constructor(props) {
        super(props);
        let itemInfo = this.getItemInfo(props.id, this.props.items);
        this.state = {
            name: itemInfo.get('name'),
            price: itemInfo.get('price'),
            img_src: itemInfo.get('imgs').first().get('original'),
            count: this.getCartItemById(props.id, this.props.cart).get('count')
        };
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    getItemInfo(id, items) {
        return items.get('' + id);
    }

    getCartItemById(id, cart) {
        return cart.get('items').find((item) => {
            return item.get('id') == id;
        });
    }

    increaseCount() {
        let count = this.state.count + 1;
        this.setState({
            count
        });
    }

    decreaseCount() {
        if (this.state.count > 1) {
            let count = this.state.count - 1;
            this.setState({
                count
            });
        }
    }

    render() {
        return (
            <div className="CartItem">
                <Link to="/item">
                    <div className="CartItem__img_block">
                        <img className="CartItem__img" src={this.state.img_src}/>
                    </div>
                </Link>
                <div className="CartItem__content_block">
                    <Link to="/item" className="CartItem__name"
                          title={this.state.name}>
                        {this.state.name}
                    </Link>


                </div>
                <div className="CartItem__count_block">
                    <Switch content="-" onActivate={this.decreaseCount}/>
                    <input className="CartItem__count_input" type="text" value={this.state.count}/>
                    <Switch content="+" onActivate={this.increaseCount}/>
                </div>
                <div className="CartItem__price">
                    ${parseFloat(this.state.price) * this.state.count}
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps)(CartItem);