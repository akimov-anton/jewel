/**
 * Created by Toha on 06.03.2017.
 */

import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class PreviewItem extends Component {
    render() {
        return (
            <div className="PreviewItem">
                <div className="PreviewItem__img_block">
                    <img className="PreviewItem__img" src={this.props.img_src}/>
                </div>
                <Link to="/item" className="PreviewItem__name"
                      title="FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017">
                    FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017
                </Link>
                <div className="PreviewItem__price">
                    US $13,85
                </div>
                <div className="PreviewItem__bottom">
                    <div className="PreviewItem__add_to_cart">
                        Add to cart
                    </div>
                    <div className="PreviewItem__more">
                        More
                    </div>
                </div>
            </div>
        );
    }
}

export default PreviewItem;