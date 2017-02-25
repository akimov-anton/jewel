/**
 * Created by Toha on 25.02.2017.
 */
import React, {Component} from 'react';
class StarRating extends Component {
    render() {
        return (
            <div className="StarRating">
                <div className="StarRating__stars">
                    <span className="StarRating__star">☆</span><span className="StarRating__star">☆</span><span
                    className="StarRating__star">☆</span><span className="StarRating__star">☆</span><span
                    className="StarRating__star">☆</span>
                </div>
                <div className="StarRating__summary_rating">
                    <span>(340)</span> &nbsp;
                    Ratings |
                </div>
            </div>
        );
    }
}

export default StarRating;