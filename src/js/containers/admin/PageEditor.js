/**
 * Created by Toha on 02.05.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getPageByLink, savePage} from '../../actions/pages';

import TinyMCE from './TinyMce';

function mapStateToProps(state, params) {
    return {
        link: params.params.link,
        pages: state.pages,
        page: state.pages.find(page => page.get('link') == params.params.link)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        savePage: (data) => {
            dispatch(savePage(data));
        },
        getPageByLink(link) {
            dispatch(getPageByLink(link));
        }
    }
};

class PageEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: {
                name: '',
                link: '',
                content: ''
            },
        };
        this.props.getPageByLink(props.params.link);



        this.onSave = this.onSave.bind(this);
    }

    setPage(page) {
        if (page) {
            page = page.toObject();

            this.setState({
                page
            });
            if (page.content) {
                TinyMCE.setContent('page_content', page.content);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.page) {
            this.setPage(nextProps.page);
        }
    }

    componentWillUnmount() {
        TinyMCE.destroy('page_content');
    }

    componentDidMount() {
        TinyMCE.init('page_content', content => {
            this.setState({
                page: {
                    ...this.state.page,
                    content
                }
            });
        });
        if (this.props.page) {
            this.setPage(this.props.page);
        }
    }

    onSave() {
        this.props.savePage(this.state.page);
    }

    render() {
        return (
            <div className="PageEditor">
                <div className="PageEditor__container form-inline">
                    <h1>
                        {this.state.page.name}
                    </h1>
                    <textarea id="page_content" className="form-control">
                    </textarea>
                    <button className="btn btn-primary" onClick={this.onSave}>Save</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEditor);