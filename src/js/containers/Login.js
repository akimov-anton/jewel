import React, {Component} from 'react';
import {connect} from 'react-redux';

import client from '../vendor/feathers';

import {login} from '../actions/login';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {

    return {
        login(data) {
            dispatch(login(data));
        }
    }
}

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    onLogin() {
        const { email, password } = this.state;

        return client.authenticate({
            strategy: 'local',
            email, password
        }).catch(error => this.setState({ error }));
        // this.props.login(this.state);
    }

    render() {
        return (
            <div className="Login">
                <div className="Login__container">
                    <h2 className="Login__title">
                        Login
                    </h2>

                    <label htmlFor="email" className="Login__label">Email</label>
                    <input id="email" type="text" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>

                    <label htmlFor="password" className="Login__label">Password</label>
                    <input id="password" type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>

                    <br/>
                    <button className="Login__button" onClick={() => {this.onLogin()}}>Login</button>
                </div>

            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);