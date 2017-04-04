/**
 * Created by Toha on 13.03.2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        items: state.items,
    };
}

class ItemInfo extends Component {
    getInfo(id) {
        return this.props.get('' + id);
    }
}

export default connect(mapStateToProps)(ItemInfo);