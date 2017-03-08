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
                            <li className="Collections__menu_li"><a className="Collections__menu_link" href="#">text</a></li>
                            <li className="Collections__menu_li"><a className="Collections__menu_link" href="#">text</a></li>
                            <li className="Collections__menu_li"><a className="Collections__menu_link" href="#">text</a></li>
                        </ul>
                    </div>
                </div>
                <div className="Collections__row Collections__row--content">
                    <div className="Collections__container">
                        <PreviewItem img_src="http://i.ebayimg.com/images/g/axcAAOSwt5hYZpST/s-l1600.jpg"/>
                        <PreviewItem img_src="http://i.ebayimg.com/images/g/ErsAAOSw241YkBVX/s-l500.jpg"/>
                        <PreviewItem img_src="http://i.ebayimg.com/images/g/JyMAAOSwLEtYm4O8/s-l1600.jpg"/>
                        <PreviewItem img_src="http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg"/>
                        <PreviewItem/>
                        <PreviewItem/>
                        <PreviewItem/>
                        <PreviewItem/>
                    </div>


                </div>
            </div>


        );
    }
}

export default CollectionsComponent;