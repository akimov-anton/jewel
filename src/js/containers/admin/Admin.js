/**
 * Created by Toha on 02.04.2017.
 */

import React, {Component} from 'react';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Admin extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         item: props.item
    //     }
    // }

    render() {
        return (
            <div className="Admin">
                {this.props.children}

            </div>
        )
    }
}

export default Admin;