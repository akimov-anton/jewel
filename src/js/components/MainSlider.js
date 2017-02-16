/**
 * Created by Toha on 12.02.2017.
 */
import React, {Component} from 'react';

class MainSlider extends Component {
    render() {
        return (
        <div className="MainSlider">
            <div className="MainSlider__container">
                <span className="MainSlider__control MainSlider__control--prev"></span>
                <ul className="MainSlider__slider">
                    <li><img className="MainSlider__img" src="/imgs/slider/slider_img1.png"/></li>
                    <li><img className="MainSlider__img" src="/imgs/slider/slider_img2.png"/></li>
                </ul>
                <span className="MainSlider__control MainSlider__control--next"></span>
            </div>
        </div>

        );
    }
}

export default MainSlider;


