/**
 * Created by Toha on 28.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

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
                    <h1 className="Page__title">
                        {this.state.page && this.state.page.get('name')}
                        <Link to={'admin/page/' + (this.state.page ? this.state.page.get('link') : '')} className="Page__edit_link">
                            (edit)
                        </Link>
                    </h1>

                    <div dangerouslySetInnerHTML={this.getPageContent(this.state.page)} className="Page__content"></div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);