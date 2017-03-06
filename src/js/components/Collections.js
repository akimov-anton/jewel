/**
 * Created by Toha on 16.02.2017.
 */
import React, {Component} from 'react';
import PreviewItem from './PreviewItem';

class CollectionsComponent extends Component {
    render() {
        return (
            <div className="Collections">
                <div className="Collections__container">
                    <div className="Collections__top_image"></div>
                </div>
                <div className="Collections__row Collections__row--menu">
                    <div className="Collections__container">
                        <ul className="Collections__menu">
                            <li className="Collections__menu_li"><a href="#">text</a></li>
                            <li className="Collections__menu_li"><a href="#">text</a></li>
                            <li className="Collections__menu_li"><a href="#">text</a></li>
                        </ul>
                    </div>
                </div>
                <div className="Collections__row Collections__row--content">
                    <PreviewItem/>
                </div>
            </div>


        );
    }
}

export default CollectionsComponent;