/**
 * Created by Toha on 02.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveItem, getItem} from '../../actions/items';
import {getCollections} from '../../actions/collections';
import {getItemSpecifics} from '../../actions/itemSpecifics';

// Import TinyMCE
import TinyMCE from './TinyMce';


import Dropzone from 'react-dropzone';


function mapStateToProps(state, params) {
    return {
        item: state.items.find(item => {
            return item.get('id') == params.params.id
        }),
        collections: state.collections,
        specifications: state.itemSpecifics
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        saveItem: (itemInfo) => {
            if (itemInfo) {
                dispatch(saveItem(itemInfo));
            }
        },
        getItem(id) {
            dispatch(getItem(id));
        },
        getCollections() {
            dispatch(getCollections());
        },
        // getItemSpecifics() {
        //     dispatch(getItemSpecifics());
        // }
    }
};


class ItemEditor extends Component {

    constructor(props) {
        super(props);

        this.onSave = this.onSave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onAddImgBlock = this.onAddImgBlock.bind(this);

        // this.props.getItemSpecifics();
        if (props.item) {
            this.state = {
                item: {
                    id: props.item.get('id'),
                    title: props.item.get('title'),
                    price: props.item.get('price'),
                    description: props.item.get('description'),
                    benefits: props.item.get('benefits'),
                    images: props.item.get('images').toArray(),
                    collectionId: props.item.get('collectionId'),
                },
                images: []
            };
        } else {
            this.state = {
                item: {
                    id: '',
                    title: '',
                    description: '',
                    benefits: '',
                    images: [''],
                    collectionId: ''
                },
                images: []
                // collections: props.collections
            };

            if (props.params.id) {
                this.props.getItem(props.params.id);
            }
        }
    }

    onSave() {
        this.props.saveItem(this.getContent());
    }

    onAddImgBlock() {
        let images = this.state.item.images;
        images.push('');
        this.setState({
            item: {...this.state.item, images}
        });
    }

    componentWillUnmount() {
        TinyMCE.destroy('item_desc');
        TinyMCE.destroy('item_benefits');
    }

    componentDidMount() {
        TinyMCE.init('item_desc');
        TinyMCE.init('item_benefits');
    }

    componentWillReceiveProps(nextProps) {
        let newItem = nextProps.item;
        if (newItem) {
            this.setItem(newItem);
        }
    }

    setItem(item) {
        if (item.get('description')) {
            TinyMCE.setContent('item_desc', item.get('description'));
        }
        if (item.get('benefits')) {
            TinyMCE.setContent('item_benefits', item.get('benefits'));
        }
        this.setState({
            item: {
                id: item.get('id'),
                title: item.get('title'),
                price: item.get('price'),
                description: item.get('description'),
                benefits: item.get('benefits'),
                images: item.get('images').toArray(),
                collectionId: item.get('collectionId')
            },
            images: []
        });
    }

    getContent() {
        this.setState({
            item: {
                ...this.state.item,
                description: TinyMCE.getContent('item_desc'),
                benefits: TinyMCE.getContent('item_benefits')
            }
        });
        return this.state;
    }

    onDrop(files) {
        let images = this.state.images || [];
        images = images.concat(files);
        this.setState({
            images
        });
    }

    render() {
        return (
            <div className="ItemEditor">
                <div className="ItemEditor__container form-inline">

                    <div className="form-group">
                        <label htmlFor="item_tittle" className="ItemEditor__label">
                            Item title
                        </label>
                        <input id="item_tittle" type="text" className="ItemEditor__input_text form-control"
                               value={this.state.item.title}
                               onChange={(e) => {
                                   this.setState({item: {...this.state.item, title: e.target.value}})
                               }}/>

                    </div>
                    {/*<div className="form-group">*/}
                    <label htmlFor="item_desc" className="ItemEditor__label">
                        Item description
                    </label>
                    <textarea id="item_desc" value={this.state.item.description} className="form-control"
                              onChange={(e) => {
                                  this.setState({item: {...this.state.item, description: e.target.value}})
                              }}>
                        </textarea>
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    <label htmlFor="item_benefits" className="ItemEditor__label">
                        Item benefits
                    </label>
                    <textarea id="item_benefits" value={this.state.item.benefits} className="form-control"
                              onChange={(e) => {
                                  this.setState({item: {...this.state.item, benefits: e.target.value}})
                              }}>
                        </textarea>
                    {/*</div>*/}
                    <div className="form-group">
                        <label htmlFor="item_price" className="ItemEditor__label">
                            Item price
                        </label>
                        <input id="item_price" type="text" className="ItemEditor__input_text form-control"
                               value={this.state.item.price}
                               onChange={(e) => {
                                   this.setState({item: {...this.state.item, price: e.target.value}})
                               }}/>
                    </div>
                    {/*<div className="form-group">*/}
                    <label className="ItemEditor__label">
                        Item images
                    </label>
                    {/*{this.state.item.imgs.map((img, i) => {*/}
                    {/*return <input key={i} type="text" className="ItemEditor__input_text form-control" value={img}*/}
                    {/*onChange={(e) => {*/}
                    {/*let new_imgs = this.state.item.imgs;*/}
                    {/*new_imgs[i] = e.target.value;*/}
                    {/*this.setState({item: {...this.state.item, imgs: new_imgs}})*/}
                    {/*}}/>*/}
                    {/*})}*/}
                    <div className="form-group">
                        {this.state.images && this.state.images.map((img, i) => {
                            return <img src={img.preview} key={i} className="ItemEditor__preview_img"/>
                        })}
                    </div>

                    <Dropzone onDrop={this.onDrop}>
                        <div>Try dropping some files here, or click to select files to upload.</div>
                    </Dropzone>
                    <button onClick={this.onAddImgBlock} className="btn btn-default">Add img</button>
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    {/*<label htmlFor="item_specifications" className="ItemEditor__label">*/}
                    {/*Item specifications*/}
                    {/*</label>*/}
                    {/*{this.props.specifications.map(spec => {*/}
                    {/*return <div key={spec.get('id')} className="form-group">*/}
                    {/*<label>{spec.get('name')}</label>*/}
                    {/*<select className="form-control" onChange={(e) => {*/}
                    {/*let specifics = this.state.item.specifics;*/}
                    {/*let value = e.target.value;*/}
                    {/*let neededSpec = specifics.find(sp => sp.id === spec.get('id'));*/}
                    {/*if (neededSpec) {*/}
                    {/*neededSpec.value = value;*/}
                    {/*} else {*/}
                    {/*specifics.push({*/}
                    {/*id: spec.get('id'),*/}
                    {/*value*/}
                    {/*});*/}
                    {/*}*/}
                    {/*this.setState({item: {...this.state.item, specifics}});*/}
                    {/*}}>*/}
                    {/*<option>Select...</option>*/}
                    {/*{spec.get('fields').map(field => {*/}
                    {/*return <option key={field} value={field}>*/}
                    {/*{field}*/}
                    {/*</option>*/}
                    {/*})}*/}
                    {/*</select>*/}
                    {/*</div>*/}
                    {/*})}*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    <label htmlFor="item_collection" className="ItemEditor__label">
                        Item collection
                    </label>
                    <select id="item_collection" className="ItemEditor__select form-control" onChange={(e) => {
                        this.setState({item: {...this.state.item, collectionId: e.target.value}})
                    }} value={this.state.item.collectionId}>
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
                    <button className="ItemEditor__btn btn btn-primary" onClick={this.onSave}>Save</button>
                    {/*</div>*/}
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemEditor);
