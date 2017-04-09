/**
 * Created by Toha on 02.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveItem} from '../../actions/items';
import {getCollections} from '../../actions/collections';
import {getItemSpecifics} from '../../actions/itemSpecifics';


function mapStateToProps(state, params) {
    return {
        item: state.items.find(item => {
            return item.get('id') == params.id
        }),
        collections: state.collections,
        specifications: state.itemSpecifics
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        saveItem: (itemInfo) => {
            if (itemInfo) {
                dispatch(saveItem(itemInfo), response => {
                    console.log(response);
                });
            }
        },
        getCollections() {
            dispatch(getCollections());
        },
        getItemSpecifics() {
            dispatch(getItemSpecifics());
        }
    }
};


class ItemEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: {
                title: '',
                description: [

                ],
                specifics: {},
                imgs: [''],
                collectionId: ''
            },
            // collections: props.collections
        };
        this.onSave = this.onSave.bind(this);
        this.onAddImgBlock = this.onAddImgBlock.bind(this);

        this.props.getItemSpecifics();
    }

    onSave() {
        this.props.saveItem(this.state.item);
    }

    onAddImgBlock() {
        let imgs = this.state.item.imgs;
        imgs.push('');
        this.setState({
            item: {...this.state.item, imgs}
        });
    }

    render() {
        return (
            <div className="ItemEditor">
                <div className="ItemEditor__container">

                    <label htmlFor="item_tittle" className="ItemEditor__label">
                        Item title
                    </label>
                    <input id="item_tittle" type="text" className="ItemEditor__input_text" value={this.state.item.title}
                           onChange={(e) => {
                               this.setState({item: {...this.state.item, title: e.target.value}})
                           }}/>

                    <label htmlFor="item_desc" className="ItemEditor__label">
                        Item description
                    </label>
                    <textarea id="item_desc" value={this.state.item.description}
                              onChange={(e) => {
                                  this.setState({item: {...this.state.item, description: e.target.value}})
                              }}>
                    </textarea>
                    <label htmlFor="item_price" className="ItemEditor__label">
                        Item price
                    </label>
                    <input id="item_price" type="text" className="ItemEditor__input_text" value={this.state.item.price}
                           onChange={(e) => {
                               this.setState({item: {...this.state.item, price: e.target.value}})
                           }}/>
                    <label className="ItemEditor__label">
                        Item images
                    </label>
                    {this.state.item.imgs.map((img, i) => {
                        return <input key={i} type="text" className="ItemEditor__input_text" value={img}
                                      onChange={(e) => {
                                          let new_imgs = this.state.item.imgs;
                                          new_imgs[i] = e.target.value;
                                          this.setState({item: {...this.state.item, imgs: new_imgs}})
                                      }}/>
                    })}
                    <button onClick={this.onAddImgBlock}>Add img</button>
                    <label htmlFor="item_specifications" className="ItemEditor__label">
                        Item specifications
                    </label>
                    {this.props.specifications.map(spec => {
                        return <div key={spec.get('id')}>
                            <label>{spec.get('name')}</label>
                            <select onChange={(e) => {
                                let specifics = this.state.item.specifics;
                                specifics[spec.get('id')] = e.target.value;
                                this.setState({item: {...this.state.item, specifics: specifics}});
                            }}>
                                <option>Select...</option>
                                {spec.get('fields').map(field => {
                                    return <option key={field} value={field}>
                                        {field}
                                    </option>
                                })}
                            </select>
                        </div>
                    })}
                    <label htmlFor="item_collection" className="ItemEditor__label">
                        Item collection
                    </label>
                    <select id="item_collection" className="ItemEditor__select" onChange={(e) => {
                        this.setState({item: {...this.state.item, collectionId: e.target.value}})
                    }}>
                        <option value="" className="ItemEditor__select_option">
                            Choose collection...
                        </option>
                        {this.props.collections.map(collection => {
                            return <option key={collection.get('id')} className="ItemEditor__select_option"
                                           value={collection.get('id')}>
                                {collection.get('name')}
                            </option>
                        })}
                    </select>
                    <button className="ItemEditor__btn" onClick={this.onSave}>Save</button>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemEditor);
