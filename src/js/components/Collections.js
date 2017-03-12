/**
 * Created by Toha on 16.02.2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PreviewItem from './PreviewItem';
import Pager from './Pager';
import {addToCart} from '../actions/cart';

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

const mapDispatchToProps = (dispatch) => {

    return {
        onAddToCart: (id) => {
            if (id) {
                dispatch(addToCart(id));
            }
        }
    }
};

class Collections extends Component {

    render() {
        return (
            <div className="Collections">
                <div className="Collections__container">
                    <div className="Collections__top_image"></div>
                </div>
                <div className="Collections__row Collections__row--menu">
                    <div className="Collections__container">
                        <ul className="Collections__menu">
                            <li className="Collections__menu_li"><a className="Collections__menu_link" href="#">text</a>
                            </li>
                            <li className="Collections__menu_li"><a className="Collections__menu_link" href="#">text</a>
                            </li>
                            <li className="Collections__menu_li"><a className="Collections__menu_link" href="#">text</a>
                            </li>
                        </ul>
                        <div className="Collections__pager">

                        </div>
                    </div>
                </div>
                <div className="Collections__row Collections__row--content">
                    <div className="Collections__container">
                        {this.props.items.valueSeq().map(item =>
                            <PreviewItem
                                key={item.get('id')}
                                name={item.get('name')}
                                price={item.get('price')}
                                img_src={item.get('img_src')}
                                onAddToCart={() => this.props.onAddToCart(item.get('id'))}/>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collections);