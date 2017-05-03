/**
 * Created by Toha on 07.02.2017.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {getPages, getPageCategories} from '../actions/pages';

function mapStateToProps(state, params) {
    return {
        pages: state.pages,
        pageCategories: state.pageCategories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPageCategories() {
            dispatch(getPageCategories());
        },
        getPages() {
            dispatch(getPages());
        }
    }
}

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: []
        };

        this.props.getPageCategories();
        this.props.getPages();
    }

    getPageCategoryId(categoryName) {
        if (this.props.pageCategories.size) {
            let category = this.props.pageCategories.find(category => category.get('name') == categoryName);
            if (category) {
                return category.get('id');
            }
        }
    }

    render() {
        return (
            <div className="Footer">
                <div className="Footer__row">
                    <div className="Footer__container">
                        <div className="Footer__col">
                            <div className="Footer__col_title">
                                INFORMATION
                            </div>
                            <ul className="Footer__col_list">
                                {this.props.pages.size && this.props.pageCategories.size ?
                                    this.props.pages.map(page => {
                                        if (page.get('categoryId') == this.getPageCategoryId('INFORMATION')) {
                                            return <li className="Footer__col_option" key={page.get('id')}>
                                                <Link to={'/page/' + page.get('link')}>
                                                    {page.get('name')}
                                                </Link>
                                            </li>
                                        }
                                    })
                                    : ''}
                            </ul>
                        </div>
                        <div className="Footer__col">
                            <div className="Footer__col_title">MORE DETAILS</div>
                            <ul className="Footer__col_list">
                                <li className="Footer__col_option">
                                    <a href="#">About us</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#"> Privacy Policy</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#">Secure payment</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#"> Site map </a>
                                </li>
                            </ul>
                        </div>
                        <div className="Footer__col">
                            <div className="Footer__col_title">JOIN US</div>
                            <ul className="Footer__col_list">
                                <li className="Footer__col_option">
                                    <span className="Footer__join_icon Footer__join_icon--fb"></span>
                                </li>
                                <li className="Footer__col_option">
                                    <span className="Footer__join_icon Footer__join_icon--twit"></span>
                                </li>
                                <li className="Footer__col_option">
                                    <span className="Footer__join_icon Footer__join_icon--inst"></span>
                                </li>
                            </ul>
                        </div>
                        <div className="Footer__col Footer__col--contact-us">
                            <div className="Footer__col_title">CONTACT US</div>
                            <ul className="Footer__col_list">
                                <li className="Footer__col_option">
                                    <a href="mailto:world4inspiration@gmail.com" className="Footer__mail">world4inspiration@gmail.com </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="Footer__row">
                    <div className="Footer__copy">
                        <span>Copyright 2017&#169; Marevo</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);