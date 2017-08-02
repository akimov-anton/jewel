import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import Header from './Header';
import Footer from './Footer';

import client from '../vendor/feathers';

function mapStateToProps(state, params) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        setUser(data) {
            dispatch({type: 'SET_USER', data});
        },
        addItemToCart(data) {
            dispatch({type: 'ADD_ITEM_TO_CART', ...data});
        }
    }
}

class App extends Component {

    componentDidMount() {

        let currentLocation = browserHistory.getCurrentLocation();
        if (currentLocation.query.token) {
            window.localStorage.setItem('feathers-jwt', currentLocation.query.token);
        }

        client.authenticate().catch(() => console.log('failed authenticate'));

        client.on('authenticated', response => {
            client.passport.verifyJWT(response.accessToken)
                .then(payload => {
                    return client.service('users').get(payload.userId);
                })
                .then(user => {
                    if (user.active) {
                        client.set('user', user);
                        this.props.setUser(user);

                        let currentLocation = browserHistory.getCurrentLocation();
                        if (currentLocation.pathname == "/login" || currentLocation.query.token) {
                            browserHistory.push('/');
                        }
                    }
                });
        });

        if (localStorage.getItem('cart')) {
            let items = JSON.parse(localStorage.getItem('cart'));
            items.map(item => this.props.addItemToCart(item));
        }
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