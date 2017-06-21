import React, {Component} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import Header from './Header';
import Footer from './Footer';

import client from '../vendor/feathers';

function mapStateToProps(state, params) {
    return {
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addUser(data) {
            dispatch({type: 'ADD_USER', data});
        }
    }
}

class App extends Component {

    componentDidMount() {
        client.authenticate().catch(() => console.log('failed authenticate'));

        client.on('authenticated', response  => {
            client.passport.verifyJWT(response.accessToken)
                .then(payload => {
                    return client.service('users').get(payload.userId);
                })
                .then(user => {
                    client.set('user', user);
                    this.props.addUser(user);
                    browserHistory.push('/');
                });
        });
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

export default connect(mapStateToProps, mapDispatchToProps)(App);