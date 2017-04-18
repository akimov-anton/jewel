/**
 * Created by Toha on 16.02.2017.
 */

import React, {Component} from 'react';
import { Link } from 'react-router';
import StarRating from './StarRating';
import ItemSlider from './ItemSlider';
import Switch from '../components/Switch';
import {connect} from 'react-redux';

import {getItem, deleteItem} from '../actions/items';

function mapStateToProps(state, params) {
    return {
        item: state.items.find(item => {
            return item.get('id') == params.id
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getItem(id) {
            dispatch(getItem(id));
        },
        deleteItem(id) {
            dispatch(deleteItem(id));
        }
    }
}

class Item extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     item: props.item
        // };
        this.props.getItem(props.id);

        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    getDescription() {
        return {
            __html: this.props.item ? this.props.item.get('description') : ''
        };
    }
    getBenefits() {
        return {
            __html: this.props.item ? this.props.item.get('benefits') : ''
        };
    }

    onDeleteItem() {
        this.props.deleteItem(this.props.id);
    }

    render() {
        return (
            <div className="Item">
                <div className="Item__row Item__row--top">
                    <div className="Item__container">
                        <div className="Item__top_image"></div>
                    </div>
                </div>
                <div className="Item__row Item__row--menu">
                    <div className="Item__container">
                        <ul className="Item__menu">
                            <li className="Item__menu_li">
                                <a className="Item__menu_link" href="#">text</a>
                            </li>
                            <li className="Item__menu_li">
                                <a className="Item__menu_link" href="#">text</a>
                            </li>
                            <li className="Item__menu_li">
                                <span className="Item__menu_link" onClick={this.onDeleteItem}>DELETE ITEM</span>
                            </li>
                            <li className="Item__menu_li">
                                <Link to={`/admin/item/${this.props.id}`} className="Item__menu_link">
                                    Edit item
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Item__row Item__row--content">
                    <div className="Item__container">
                        {this.props.item &&
                        <ItemSlider images={this.props.item.get('imgs').toJS()}/>
                        }
                        <div className="Item__content">
                            <div className="Item__title">
                                {this.props.item ? this.props.item.get('title') : ''}
                            </div>
                            <div className="Item__short_description_block">
                                {/*<div className="Item__short_description_title">Description:</div>*/}
                                <div className="Item__short_description">
                                </div>
                            </div>
                            <hr className="Item__splitter"/>
                            <div className="Item__rating_block">
                                <StarRating/>
                            </div>
                            <hr className="Item__splitter"/>
                            <div className="Item__order_block">
                                <div className="Item__order_left_block">
                                    {/*<div className="Item__order_key">Product code</div>*/}
                                    {/*<div className="Item__order_value">C425001A</div>*/}
                                    <div className="Item__order_key">Best price</div>
                                    <div className="Item__order_value">
                                        $ {this.props.item ? this.props.item.get('price') : ''}
                                    </div>
                                </div>
                                <div className="Item__order_right_block">
                                    <button className="Item__add_to_cart_btn">Add to cart</button>
                                </div>
                            </div>
                            <hr className="Item__splitter"/>
                            <div className="Item__more_description_block">
                                <div className="Item__more_description_title">
                                    More Information:
                                </div>
                                <div className="Item__description_block">
                                    <div className="Item__description_block_wrapper">
                                        <Switch content="-" type="TOGGLE_PLUS"/>
                                        <div className="Item__description_block_name">
                                            Description
                                        </div>
                                    </div>
                                    <div className="Item__description_text" dangerouslySetInnerHTML={this.getDescription()}>

                                        {/*{this.props.item ? this.props.item.get('description') : ''}*/}

                                        {/*{this.props.item ? this.props.item.get('specifics').map(spec => {*/}
                                            {/*return <div key={spec.get('id')} className="Item__specifics">*/}
                                                {/*<div className="Item__specifics_key">*/}
                                                    {/*/!*{spec.get('')}*!/*/}
                                                {/*</div>*/}
                                                {/*<div className="Item__specifics_key"></div>*/}
                                            {/*</div>*/}
                                            {/*}) : ''}*/}
                                    </div>
                                </div>
                                <div className="Item__description_block Item__description_block--minimized">
                                    <div className="Item__description_block_wrapper">
                                        <Switch content="-" type="TOGGLE_PLUS"/>
                                        <div className="Item__description_block_name">
                                            Benefits
                                        </div>
                                    </div>
                                    <div className="Item__description_text" dangerouslySetInnerHTML={this.getBenefits()}>
                                        {/*{this.props.item ? this.props.item.get('benefits') : ''}*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);