/**
 * Created by anton on 16.02.17.
 */
import React, { Component } from 'react';
import TagLine from '../containers/TagLine';
import MainSlider from '../containers/MainSlider';
import MainGallery from '../containers/MainGallery';

class Home extends Component {
    render() {
        return (
            <div>
                <MainSlider/>

                <TagLine/>

                <MainGallery/>
            </div>
        );
    }
}

export default Home;

