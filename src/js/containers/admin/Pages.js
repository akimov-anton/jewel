/**
 * Created by Toha on 28.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {savePage, getPages, removePage, getPageCategories, savePageCategory} from '../../actions/pages';

function mapStateToProps(state, params) {
    return {
        pages: state.pages,
        pageCategories: state.pageCategories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        savePage(data) {
            dispatch(savePage(data));
        },
        savePageCategory(data) {
            dispatch(savePageCategory(data));
        },
        removePage(id) {
            dispatch(removePage(id));
        },
        getPages() {
            dispatch(getPages());
        },
        getPageCategories() {
            dispatch(getPageCategories());
        }
    }
};

class Pages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: {
                name: '',
                link: '',
                categoryId: null
            },
            pageCategory: {
                name: ''
            }
        };

        this.onSavePage = this.onSavePage.bind(this);
        this.onSavePageCategory = this.onSavePageCategory.bind(this);
        this.onRemove = this.onRemove.bind(this);

        this.props.getPages();
        this.props.getPageCategories();
    }

    onSavePage() {
        this.props.savePage(this.state.page);
    }

    onSavePageCategory() {
        this.props.savePageCategory(this.state.pageCategory);
    }

    onRemove(id) {
        this.props.removePage(id);
    }

    getCategoryNameById(id) {
        if (id) {
            let category = this.props.pageCategories.find(category => category.get('id') == id);
            if (category) {
                return category.get('name');
            }
        }
    }

    render() {
        return (
            <div className="Pages">
                <div className="Pages__container form-inline">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>
                                Page category
                            </th>
                            <th>
                                Page name
                            </th>
                            <th>
                                Page link
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.pages.map(page =>
                            <tr key={page.get('id')}>
                                <td>
                                    {this.getCategoryNameById(page.get('categoryId'))}
                                </td>
                                <td>
                                    <Link to={{pathname: `/admin/page/${page.get('link')}`}}>
                                        {page.get('name')}
                                    </Link>
                                </td>
                                <td>
                                    {page.get('link')}
                                </td>
                                <td>
                                    <button className="btn btn-default" onClick={(e) => {
                                        this.onRemove(page.get('id'));
                                    }}>Remove
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <div className="form-group">
                        <h3>Create new page category</h3>
                        <label htmlFor="page_name" className="Pages__label">
                            Category name
                        </label>
                        <input id="page_name" type="text" className="Pages__input_text form-control"
                               value={this.state.pageCategory.name}
                               onChange={(e) => {
                                   this.setState({pageCategory: {...this.state.pageCategory, name: e.target.value}})
                               }}/>

                        <button className="Pages__btn btn btn-default" onClick={this.onSavePageCategory}>Save</button>
                    </div>
                    {/*<div className="form-group">*/}
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
                    <label htmlFor="page_link" className="Pages__label">
                        Page category
                    </label>
                    <select className="form-control" onChange={(e) => {
                        this.setState({page: {...this.state.page, categoryId: e.target.value}})
                    }}>
                        <option value="" className="">
                            Choose category...
                        </option>
                        {this.props.pageCategories.map(category => {
                            return <option key={category.get('id')} className=""
                                           value={category.get('id')}>
                                {category.get('name')}
                            </option>
                        })}
                    </select>

                    <button className="Pages__btn btn btn-default" onClick={this.onSavePage}>Save</button>
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);