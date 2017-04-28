/**
 * Created by Toha on 28.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {savePage, getPages, removePage} from '../../actions/pages';

function mapStateToProps(state, params) {
    return {
        pages: state.pages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        savePage(data) {
            dispatch(savePage(data));
        },
        removePage(id) {
            dispatch(removePage(id));
        },
        getPages() {
            dispatch(getPages());
        }
    }
};

class Pages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: {
                name: '',
                link: ''
            },
        };
    }

    onSave() {
        this.props.savePage(this.state.page);
    }

    onRemove(id) {
        this.props.removePage(id);
    }

    render() {
        return (
            <div className="Pages">
                <div className="Pages__container form-inline">
                    {this.props.pages.map(page =>
                        <div key={page.get('id')} className="">
                            {page.get('name')}
                            <button className="btn btn-default" onClick={(e) => {
                                this.onRemove(page.get('id'));
                            }}>Remove
                            </button>
                        </div>
                    )}

                    <div className="form-group">
                        <h3>Create new page</h3>
                        <label htmlFor="page_name" className="Pages__label">
                            Page name
                        </label>
                        <input id="page_name" type="text" className="Pages__input_text form-control"
                               value={this.state.page.name}
                               onChange={(e) => {
                                   this.setState({page: {...this.state.page, name: e.target.value}})
                               }}/>
                        <label htmlFor="page_link" className="Pages__label">
                            Page link
                        </label>
                        <input id="page_link" type="text" className="Pages__input_text form-control"
                               value={this.state.page.link}
                               onChange={(e) => {
                                   this.setState({page: {...this.state.page, link: e.target.value}})
                               }}/>

                        <button className="Pages__btn btn btn-default" onClick={this.onSave}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);