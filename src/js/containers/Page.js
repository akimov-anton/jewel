/**
 * Created by Toha on 28.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

class Page extends Component {
    constructor(props){
        super(props);
        console.log('props');
    }
    render() {
        return (
            <div className="Page">
                Page
            </div>
        );
    }
}
export default Page;