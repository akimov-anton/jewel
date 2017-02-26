/**
 * Created by Toha on 12.02.2017.
 */
import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

class MainSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    renderLeftNav(onClick, disabled) {
        return (
            <span className="MainSlider__control MainSlider__control--prev" onClick={onClick}></span>
        )
    }

    renderRightNav(onClick, disabled) {
        return (
            <span className="MainSlider__control MainSlider__control--next" onClick={onClick}></span>
        )
    }

    render() {
        const images = [
            {
                original: '/imgs/slider/slider_img1.png'
            },
            {
                original: '/imgs/slider/slider_img2.png'
            }
        ];
        return (
            <div className="MainSlider">
                <div className="MainSlider__container">
                    <ImageGallery
                        items={images}
                        showNav={true}
                        showThumbnails={false}
                        showBullets={true}
                        renderLeftNav={this.renderLeftNav}
                        renderRightNav={this.renderRightNav}
                        slideInterval={2000}/>
                </div>
            </div>
        );
    }
}

export default MainSlider;


