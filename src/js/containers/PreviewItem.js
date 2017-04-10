/**
 * Created by Toha on 06.03.2017.
 */

import React, {Component, PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import {isImmutable} from 'immutable';


const mapStateToProps = (state, ownProps) => {
    return {
        onAddToCart: ownProps.onAddToCart
    }
};



class PreviewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img_src: isImmutable(props.img_src) ? props.img_src.get('original') : props.img_src
        }
    }
    render() {
        return (
            <div className="PreviewItem">
                <Link to={{pathname: `/item/${this.props.id}`}} className="PreviewItem__name"
                      title={this.props.title}>
                    <div className="PreviewItem__img_block">
                        <img className="PreviewItem__img" src={this.state.img_src}/>
                    </div>
                </Link>
                <Link to={{pathname: `/item/${this.props.id}`}} className="PreviewItem__name"
                      title={this.props.title}>
                    {this.props.title}
                </Link>
                <div className="PreviewItem__price" >
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