import React, {Component} from 'react';
import {connect} from 'react-redux';

import client from '../vendor/feathers';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {

    return {
        removeUser() {
            dispatch({type: 'REMOVE_USER'});
        }
    }
};

class Logout extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        client.logout()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log('ERROR LOGOUT');
            });
        this.props.removeUser();

    }

    render() {
        return (
            <div className="Logout">
                <div className="Logout__container">

                </div>

            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout);