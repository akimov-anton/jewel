import React, {Component} from 'react';

class TagLine extends Component {
    render() {
        return (
            <div className="TagLine">
                <div className="TagLine__container">

                    <div className="TagLine__img"></div>
                    <div className="TagLine__text">Explore our New Arrivals in <span className="TagLine__text--big">Sterling Silver</span> and Exciting new colours in semi precious</div>

                </div>
                <div className="TagLine__arrow"></div>
            </div>

        );
    }
}

export default TagLine;