import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                {this.props.children}
                <Footer/>

            </div>
        );
    }
}

export default App;

