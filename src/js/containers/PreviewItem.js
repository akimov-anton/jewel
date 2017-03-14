/**
 * Created by Toha on 06.03.2017.
 */

import React, {Component, PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {
        onAddToCart: ownProps.onAddToCart
    }
};



class PreviewItem extends Component {
    render() {
        return (
            <div className="PreviewItem">
                <div className="PreviewItem__img_block">
                    <img className="PreviewItem__img" src={this.props.img_src}/>
                </div>
                <Link to="/item" className="PreviewItem__name"
                      title={this.props.name}>
                    {this.props.name}
                </Link>
                <div className="PreviewItem__price">
                    {this.props.price}
                </div>
                <div className="PreviewItem__bottom">
                    <button className="PreviewItem__add_to_cart" onClick={this.props.onAddToCart}>
                        Add to cart
                    </button>
                    <div className="PreviewItem__more">
                        More
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PreviewItem);