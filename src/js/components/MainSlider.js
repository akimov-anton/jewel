/**
 * Created by Toha on 12.02.2017.
 */
import React, {Component} from 'react';
import $ from 'jquery';

class MainSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: {
                controls: false,
                pager: false,
                nextSelector: '<img src="/imgs/slider/right_arrow.png"/>',
                prevSelector: '<img src="/imgs/slider/left_arrow.png"/>'
            }
        };
    }
    componentDidMount() {
        // console.log($(this.slider).bxSlider);
        // $(this.slider).bxSlider(this.state.slider);
    }
    render() {
        return (
        <div className="MainSlider">
            <div className="MainSlider__container">
                <span className="MainSlider__control MainSlider__control--prev"></span>
                <ul className="MainSlider__slider" ref={(slider) => {console.log('ref! ' + slider); this.slider = slider; }}>
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


