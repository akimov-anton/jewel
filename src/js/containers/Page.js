/**
 * Created by Toha on 28.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getPageByLink} from '../actions/pages';

function mapStateToProps(state, params) {
    return {
        link: params.params.link,
        pages: state.pages,
        page: state.pages.find(page => page.get('link') == params.params.link)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPageByLink(link) {
            dispatch(getPageByLink(link));
        }
    }
}

class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: ''
        };

        this.props.getPageByLink(this.props.link);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.page) {
            let page = nextProps.page;
            this.setState({
                page
            });
        }
    }

    componentDidMount() {
        if (this.props.page) {
            this.setState({
                page: this.props.page
            });
        }
    }

    getPageContent(page) {
        return {
            __html: page ? page.get('content') : ''
        };
    }

    render() {
        return (
            <div className="Page">
                <div className="Page__container">
                    <div dangerouslySetInnerHTML={this.getPageContent(this.state.page)}></div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);