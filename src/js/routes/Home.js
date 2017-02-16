/**
 * Created by anton on 16.02.17.
 */
import React, { Component } from 'react';
import TagLine from '../components/TagLine';
import MainSlider from '../components/MainSlider';
import MainGallery from '../components/MainGallery';

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

