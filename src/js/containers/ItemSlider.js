/**
 * Created by Toha on 26.02.2017.
 */
import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

class ItemSlider extends Component {
    render() {

        return (
            <div className="ItemSlider">
                <ImageGallery
                    items={this.props.images}
                    showThumbnails={true}
                    slideInterval={2000}/>
            </div>
        );
    }
}

export default ItemSlider;