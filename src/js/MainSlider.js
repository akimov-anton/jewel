/**
 * Created by Toha on 12.02.2017.
 */
import React, {Component} from 'react';

class MainSlider extends Component {
    render() {
        return (
            <ul className="bxslider">
                <li><img src="/imgs/pic1.jpg"/></li>
                <li><img src="/imgs/pic2.jpg"/></li>
                <li><img src="/imgs/pic3.jpg"/></li>
                <li><img src="/imgs/pic4.jpg"/></li>
            </ul>
        );
    }
}

export default MainSlider;


