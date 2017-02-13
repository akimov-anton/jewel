import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import TagLine from './TagLine';
import MainSlider from './MainSlider';
import MainGallery from './MainGallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <MainSlider/>

          <TagLine/>

          <MainGallery/>

        <Footer/>

      </div>
    );
  }
}

export default App;
