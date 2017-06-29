import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import client from '../vendor/feathers';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {

    return {};
}

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            showError: false
        };


    }

    onRegister() {
        const {
            email,
            firstName,
            lastName,
            password
        } = this.state;

        if (email && firstName && lastName && password) {
            return client.service('users')
                .create(
                    {
                        email,
                        firstName,
                        lastName,
                        password
                    }
                )
                .then((res) => console.log(res))
                .catch(error => console.log(error));
        } else {
            this.setState({
                showError: true
            });
        }
    }


    render() {
        return (
            <div className="Registration">
                <div className="Registration__container">
                    <h2 className="Registration__title">
                        Registration
                    </h2>

                    <label htmlFor="email" className="Registration__label">Email</label>
                    <input id="email" type="email" value={this.state.email}
                           onChange={e => this.setState({email: e.target.value})}/>

                    <label htmlFor="firstName" className="Registration__label">First name</label>
                    <input id="firstName" type="text" value={this.state.firstName}
                           onChange={e => this.setState({firstName: e.target.value})}/>

                    <label htmlFor="lastName" className="Registration__label">Last name</label>
                    <input id="lastName" type="text" value={this.state.lastName}
                           onChange={e => this.setState({lastName: e.target.value})}/>

                    <label htmlFor="password" className="Registration__label">Password</label>
                    <input id="password" type="password" value={this.state.password}
                           onChange={e => this.setState({password: e.target.value})}/>
                    <br/>

                    {this.state.showError &&
                    <div className="Registration__error">
                        All fields are required
                    </div>
                    }

                    <button className="Registration__button" onClick={() => {
                        this.onRegister()
                    }}>Register
                    </button>
                </div>

            </div>
        );

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);