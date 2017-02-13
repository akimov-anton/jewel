import React, {Component} from 'react';

class MainGallery extends Component {
    render() {
        return (
            <div className="MainGallery">
                <div className="MainGallery__container">
                    <div className="MainGallery__arrows"></div>


                    <span><img src="/imgs/MainGallery/1.png"></img></span>
                    <span><img src="/imgs/MainGallery/2.png"></img></span>
                    <span><img src="/imgs/MainGallery/3.png"></img></span>
                    <span><img src="/imgs/MainGallery/4.png"></img></span>
                    <span><img src="/imgs/MainGallery/5.png"></img></span>

                </div>
            </div>

        );
    }
}

export default MainGallery;