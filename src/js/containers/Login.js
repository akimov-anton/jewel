import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';

import client from '../vendor/feathers';

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {

    return {
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
        })
            .then(response => {
                client.passport.verifyJWT(response.accessToken)
                    .then(payload => {
                        return client.service('users').get(payload.userId);
                    })
                    .then(user => {
                        if (!user.active) {
                            client.logout();
                            browserHistory.push('/page/need_confirm_reg');
                        }
                    });
            })
            .catch(error => this.setState({ error }));
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
                    <div className="Login__register_link">
                        <Link to="/register">or register</Link>
                    </div>
                </div>

            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);