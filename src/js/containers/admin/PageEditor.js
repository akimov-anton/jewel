/**
 * Created by Toha on 02.05.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getPageByLink} from '../../actions/pages';

import TinyMCE from './TinyMce';

function mapStateToProps(state, params) {
    return {}
}

const mapDispatchToProps = (dispatch) => {

    return {
        savePage: (data) => {
        },
        getPageByLink(link) {
            dispatch(getPageByLink(link));
        }
    }
};

class PageEditor extends Component {

    constructor(props) {
        super(props);
        this.props.getPageByLink(props.params.link);
    }

    render() {
        return (
            <div className="PageEditor">
                <div className="PageEditor__container form-inline">

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEditor);