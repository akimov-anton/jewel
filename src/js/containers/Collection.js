/**
 * Created by Toha on 16.02.2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PreviewItem from './PreviewItem';
import Pager from './Pager';
import {addToCart} from '../actions/cart';
import {getItems} from '../actions/items';
import { getCollections } from '../actions/collections';
import { Link } from 'react-router';

function mapStateToProps(state, params) {

    return {
        items: state.items.filter(item => {
            if (state.collections.size) {
                let collection = state.collections.find(collection => collection.get('name') === params.name);
                if (collection) {
                    return item.get('collectionId') === collection.get('id');
                }
            }
        }),
        // collection: ,
        collectionName: params.name
    };
}

const mapDispatchToProps = (dispatch) => {

    return {
        onAddToCart: (id) => {
            if (id) {
                dispatch(addToCart(id));
            }
        },
        getItems(collectionName) {
            dispatch(getItems(collectionName));
        }
    }
};

class Collection extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name
        };

        this.props.getItems(props.collectionName);
    }
    render() {
        return (
            <div className="Collection">
                <div className="Collection__container">
                    <div className="Collection__top_image"></div>
                </div>
                <div className="Collection__row Collection__row--menu">
                    <div className="Collection__container">
                        <ul className="Collection__menu">
                            <li className="Collection__menu_li"><a className="Collection__menu_link" href="#">text</a>
                            </li>
                            <li className="Collection__menu_li"><a className="Collection__menu_link" href="#">text</a>
                            </li>
                            <li className="Collection__menu_li"><a className="Collection__menu_link" href="#">text</a>
                            </li>
                            <li className="Collection__menu_li">
                                <Link to='/admin/item/new' className='Collection__menu_link'>
                                    Add item
                                </Link>
                            </li>
                        </ul>
                        <div className="Collection__pager">

                        </div>
                    </div>
                </div>
                <div className="Collection__row Collection__row--content">
                    <div className="Collection__container">
                        {this.props.items.map(item =>
                            <PreviewItem
                                key={item.get('id')}
                                id={item.get('id')}
                                title={item.get('title')}
                                price={item.get('price')}
                                img_src={item.get('imgs').first()}
                                onAddToCart={() => this.props.onAddToCart(item.get('id'))}/>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);