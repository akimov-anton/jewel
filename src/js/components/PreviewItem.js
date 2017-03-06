/**
 * Created by Toha on 06.03.2017.
 */

import React, {Component} from 'react';

class PreviewItem extends Component {
    render() {
        return (
            <div className="PreviewItem">
                <img className="PreviewItem__img" src="http://i.ebayimg.com/images/g/axcAAOSwt5hYZpST/s-l1600.jpg"/>
                <div className="PreviewItem__name">
                    FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017
                </div>
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