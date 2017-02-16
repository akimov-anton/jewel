/**
 * Created by Toha on 16.02.2017.
 */

import React, { Component } from 'react';
class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="item__container">
                    <span><img src="/imgs/item/frontpic.png"></img></span>
                    <span className="item__tag"> Test <br/> Text</span>




                </div>
                <div className="item__img"></div>
            </div>






        );
    }
}

export default Item;