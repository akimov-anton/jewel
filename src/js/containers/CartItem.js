/**
 * Created by Toha on 12.03.2017.
 */
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items
    }
};

class CartItem extends Component {
    constructor(props) {
        super(props);
        let itemInfo = this.getItemInfo(props.id);
        this.state = {
            name: itemInfo.get('name'),
            price: itemInfo.get('price'),
            img_src: itemInfo.get('img_src')
        }
    }

    getItemInfo(id) {
        return this.props.items.get('' + id);
    }

    render() {
        return (
            <div className="CartItem">
                <div className="CartItem__img_block">
                    <Link to="/item" className="CartItem__name">
                        <img className="CartItem__img" src={this.state.img_src}/>
                    </Link>
                </div>
                <div className="CartItem__content_block">
                    <Link to="/item" className="CartItem__name"
                          title={this.state.name}>
                        {this.state.name}
                    </Link>
                    <div className="CartItem__price">
                        {this.state.price}
                    </div>
                </div>

            </div>
        );
    }
}
export default connect(mapStateToProps)(CartItem);