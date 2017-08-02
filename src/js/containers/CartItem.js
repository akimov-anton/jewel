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

function mapDispatchToProps(dispatch) {
    return {
        setItemCount(data) {
            dispatch({type: 'CHANGE_ITEM_COUNT_IN_CART', ...data})
        }
    }
}

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    increaseCount() {
        let count = this.state.count + 1;
        this.setState({
            count
        });
        this.props.setItemCount({
            id: this.props.itemId,
            count
        });
    }

    decreaseCount() {
        if (this.state.count > 1) {
            let count = this.state.count - 1;
            this.setState({
                count
            });
            this.props.setItemCount({
                id: this.props.itemId,
                count
            })
        }
    }

    render() {
        return (
            <div className="CartItem">
                <Link to={`/item/${this.props.itemId}`}>
                    <div className="CartItem__img_block">
                        <img className="CartItem__img" src={'/images/' + this.state.img_src}/>
                    </div>
                </Link>
                <div className="CartItem__content_block">
                    <Link to={`/item/${this.props.itemId}`} className="CartItem__title"
                          title={this.state.title}>
                        {this.state.title}
                    </Link>
                </div>
                <div className="CartItem__right_block">
                    <div className="CartItem__price">
                        ${parseFloat(this.state.price) * this.state.count}
                    </div>
                    <div className="CartItem__count_block">
                        <Switch content="-" onActivate={this.decreaseCount}/>
                        <input className="CartItem__count_input" type="text" value={this.state.count}/>
                        <Switch content="+" onActivate={this.increaseCount}/>
                    </div>
                    <div className="CartItem__remove_block">
                        <button className="CartItem__remove_btn btn btn-default" onClick={e => {
                            this.props.onRemove(this.state.itemId)
                        }}>
                            Remove
                        </button>
                    </div>
                </div>


            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);