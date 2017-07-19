/**
 * Created by Toha on 02.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveItem, getItem} from '../../actions/items';
import {getCollections} from '../../actions/collections';

import ItemAttributes from '../../components/admin/ItemAttributes';
import Modal from 'react-modal';

// Import TinyMCE
import TinyMCE from './TinyMce';


import Dropzone from 'react-dropzone';


function mapStateToProps(state, params) {
    return {
        item: state.items.find(item => {
            return item.get('id') == params.params.id
        }),
        collections: state.collections,
        attributes: state.itemAttributes
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
        }
    }
};


class ItemEditor extends Component {

    constructor(props) {
        super(props);

        this.onSave = this.onSave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onAddImgBlock = this.onAddImgBlock.bind(this);
        this.onRemoveImg = this.onRemoveImg.bind(this);
        this.onToggleOption = this.onToggleOption.bind(this);
        this.onRemoveOptionFromImg = this.onRemoveOptionFromImg.bind(this);
        this.onAddAttribute = this.onAddAttribute.bind(this);
        this.onRemoveAttribute = this.onRemoveAttribute.bind(this);
        this.onCloseImageModal = this.onCloseImageModal.bind(this);
        this.onCloseAttributesModal = this.onCloseAttributesModal.bind(this);

        this.state = {
            item: {
                id: props.item ? props.item.get('id') : '',
                title: props.item ? props.item.get('title') : '',
                price: props.item ? props.item.get('price') : '',
                description: props.item ? props.item.get('description') : '',
                benefits: props.item ? props.item.get('benefits') : '',
                customer_care: props.item ? props.item.get('customer_care') : '',
                images: props.item && props.item.get('images') ? props.item.get('images').toArray() : [],
                collectionId: props.item ? props.item.get('collectionId') : '',
                attributes: props.item && props.item.get('attributes') ? props.item.get('attributes').toJS() : [],
                // optionsToImg: props.item && props.item.get('optionsToImg') ? props.item.get('attributes').toJS() : []
            },
            images: [],
            showImgModal: false,
            showAttributesModal: false,
            selectedImgId: ''
        };

        if (!props.item && props.params.id) {
            this.props.getItem(props.params.id);
        }
    }

    componentDidMount() {
        TinyMCE.init('item_desc', description => {
            this.setState({
                item: {
                    ...this.state.item,
                    description
                }
            });
        });
        TinyMCE.init('item_benefits', benefits => {
            this.setState({
                item: {
                    ...this.state.item,
                    benefits
                }
            });
        });
        TinyMCE.init('item_customer_care', customer_care => {
            this.setState({
                item: {
                    ...this.state.item,
                    customer_care
                }
            });
        });
    }

    componentWillUnmount() {
        TinyMCE.destroy('item_desc');
        TinyMCE.destroy('item_benefits');
        TinyMCE.destroy('item_customer_care');
    }

    componentWillReceiveProps(nextProps) {
        let newItem = nextProps.item;
        if (newItem && !this.state.item.id) {
            this.setItem(newItem);
        }
    }

    onSave() {
        this.props.saveItem(this.state);
    }

    onAddImgBlock() {
        let images = this.state.item.images;
        images.push('');
        this.setState({
            item: {...this.state.item, images}
        });
    }

    onRemoveImg(id) {
        let images = this.state.item.images;
        images.splice(images.indexOf(id), 1);
        this.setState({
            images
        });
        this.props.saveItem(this.state);
    }

    onRemoveAttribute(attrId) {
        this.setState({
            item: {
                ...this.state.item,
                attributes: this.state.item.attributes.filter(attr => attr.id != attrId)
            }
        });
    }

    onSelectImage(imgId) {
        this.setState({
            selectedImgId: imgId,
            showImgModal: true
        });
    }

    onCloseImageModal() {

        this.setState({
            showImgModal: false
        });
    }

    onCloseAttributesModal() {
        this.setState({
            showAttributesModal: false
        });
    }

    onDrop(files) {
        let images = this.state.images || [];
        images = images.concat(files);
        this.setState({
            images
        });
    }

    onAddAttribute(attr) {
        this.setState({
            item: {
                ...this.state.item,
                attributes: [...this.state.item.attributes, {...attr, options: []}]
            }
        });
        this.onCloseAttributesModal();
    }

    onToggleOption(attrId, optionName) {
        let attributes = this.state.item.attributes.slice();
        let attr = attributes.find(attr => attr.id === attrId);
        if (attr.options.find(option => option.name === optionName)) {
            attr.options = attr.options.filter(op => op.name !== optionName);
        } else {
            attr.options.push({name: optionName});
        }
        this.setState({
            item: {
                ...this.state.item,
                attributes: attributes
            }
        }, () => {
            console.log(this.state.item.attributes);
        });
    }

    onRemoveOptionFromImg(imgId) {
        let attributes = [...this.state.item.attributes];

        // find attributes with this img and clear imgLink if exist
        attributes.map(attr => {
            attr.options.map(option => {
                if (option.imgLink == imgId) {
                    option.imgLink = '';
                }
            });
        });
        this.setState({
            attributes
        });
    }

    setItem(item) {
        console.log('setItem', item.get('attributes'));
        if (item.get('description')) {
            TinyMCE.setContent('item_desc', item.get('description'));
        }
        if (item.get('benefits')) {
            TinyMCE.setContent('item_benefits', item.get('benefits'));
        }
        if (item.get('customer_care')) {
            TinyMCE.setContent('item_customer_care', item.get('customer_care'));
        }
        this.setState({
            item: {
                id: item.get('id'),
                title: item.get('title'),
                price: item.get('price'),
                description: item.get('description'),
                benefits: item.get('benefits'),
                customer_care: item.get('customer_care'),
                images: item.get('images') ? item.get('images').toArray() : [],
                collectionId: item.get('collectionId'),
                attributes: item.get('attributes') ? item.get('attributes').toJS() : [],
                // optionsToImg: item.get('optionsToImg') ? item.get('optionsToImg').toJS() : []
            },
            images: []
        });
    }

    getSelectedAttributeForImg(imgId) {
        this.state.images.find(id => id == imgId);
    }

    getOptionNameForImgId(imgId) {
        let name = '';
        this.state.item.attributes.map(attr => {
            attr.options.map(opt => {
                if (opt.imgLink == imgId) {
                    name = opt.name;
                }
            })
        });
        return name;
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
                    <label htmlFor="item_customer_care" className="ItemEditor__label">
                        Item customer care
                    </label>
                    <textarea id="item_customer_care" value={this.state.item.customer_care} className="form-control"
                              onChange={(e) => {
                                  this.setState({item: {...this.state.item, customer_care: e.target.value}})
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
                    <label htmlFor="item_attributes" className="ItemEditor__label">
                        Item attributes
                    </label>
                    <ItemAttributes
                        selectedAttributes={this.state.item.attributes}
                        showOnlySelected={true}
                        onToggleOption={this.onToggleOption}
                        onRemoveAttribute={this.onRemoveAttribute}

                    />
                    <button type="button" className="btn btn-link"
                            onClick={e => {
                                this.setState({
                                    showAttributesModal: true
                                })
                            }}>
                        +Add attribute
                    </button>

                    <label className="ItemEditor__label">
                        Item images
                    </label>
                    <div className="form-group">
                        {this.state.item.images && this.state.item.images.map((imgId, i) => {
                            return <div className="ItemEditor__preview_img_block" key={i}>
                                <span onClick={() => {
                                    this.onRemoveImg(imgId);
                                }}
                                      className="ItemEditor__preview_img_remove glyphicon glyphicon-remove-circle"></span>
                                <img src={'/images/' + imgId} className="ItemEditor__preview_img"
                                     onClick={e => {
                                         this.onSelectImage(imgId)
                                     }}/>
                                <div className="ItemEditor__preview_img_option">
                                    {this.getOptionNameForImgId(imgId)}
                                    <span className="ItemEditor__preview_img_option_close" onClick={e => {
                                        this.onRemoveOptionFromImg(imgId);
                                    }}>&#10006;</span>
                                </div>
                            </div>
                        })}
                    </div>
                    {/*<div className="form-group">*/}
                    <label className="ItemEditor__label">
                        New images
                    </label>
                    <div className="form-group">
                        {this.state.images && this.state.images.map((img, i) => {
                            return <img src={img.preview} key={i} className="ItemEditor__preview_img"/>
                        })}
                    </div>

                    <Dropzone onDrop={this.onDrop}>
                        <div>Try dropping some files here, or click to select files to upload.</div>
                    </Dropzone>
                    <button onClick={this.onAddImgBlock} className="btn btn-default">Add img</button>
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

                    {/*</div>*/}
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                    </div>
                    <br/>
                    <button className="ItemEditor__btn btn btn-primary" onClick={this.onSave}>Save</button>
                </div>
                <Modal
                    className="Modal"
                    isOpen={this.state.showAttributesModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.onCloseAttributesModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <ItemAttributes
                        selectedAttributes={this.state.item.attributes}
                        onSelectAttribute={this.onAddAttribute}
                    />
                    {/*<button onClick={this.onCloseImageModal}>Close Modal</button>*/}
                </Modal>
                <Modal
                    className="Modal"
                    isOpen={this.state.showImgModal}
                    contentLabel=""
                    onRequestClose={this.onCloseImageModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <ItemAttributes
                        selectedAttributes={this.state.item.attributes}
                        onToggleOption={(attrId, optionName) => {
                            let attributes = [...this.state.item.attributes];
                            let attr = attributes.find(attr => attr.id == attrId);

                            // find attributes with this img and clear imgLink if exist
                            attributes.map(attr_ => {
                                attr_.options.map(option => {
                                   if (option.imgLink == this.state.selectedImgId) {
                                       option.imgLink = '';
                                   }
                                });
                            });

                            attr
                                .options
                                .find(option => option.name == optionName)
                                .imgLink = this.state.selectedImgId;
                            this.setState({
                                item: {...this.state.item},
                                attributes,
                                selectedImgId: null,
                                showImgModal: false
                            });
                        }}
                        onSelectAttribute={(data) => {
                            console.log(data);
                        }}
                    />
                    {/*<button onClick={this.onCloseImageModal}>Close Modal</button>*/}
                </Modal>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemEditor);
