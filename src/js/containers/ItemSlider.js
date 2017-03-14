/**
 * Created by Toha on 26.02.2017.
 */
import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

class ItemSlider extends Component {
    render() {
        const images = [
            {
                original: '/imgs/item/item1.jpg',
                thumbnail: '/imgs/item/preview/item1_thumb.jpg'
            },
            {
                original: '/imgs/item/item2.jpg',
                thumbnail: '/imgs/item/preview/item2_thumb.jpg'
            }
        ];
        return (
            <div className="ItemSlider">
                <ImageGallery
                    items={images}
                    showThumbnails={true}
                    slideInterval={2000}/>
            </div>
        );
    }
}

export default ItemSlider;