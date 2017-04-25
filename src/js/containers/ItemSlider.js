/**
 * Created by Toha on 26.02.2017.
 */
import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

class ItemSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.images.map(id => {
                let img = props.path + id;
                if (!img.original) {
                    return {
                        original: img,
                        thumbnail: img
                    }
                } else {
                    return img;
                }
            })
        };
    }

    render() {
        return (
            <div className="ItemSlider">
                <ImageGallery
                    items={this.state.images}
                    showThumbnails={true}
                    slideInterval={2000}/>
            </div>
        );
    }
}

export default ItemSlider;