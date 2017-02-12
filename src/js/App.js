import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainSlider from './MainSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <MainSlider/>

        <Footer/>

      </div>
    );
  }
}

export default App;
