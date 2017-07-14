import React, {Component} from 'react';
import {connect} from 'react-redux';
import client from '../../vendor/feathers';
import {getAttributes, addAttributes, updateAttribute} from '../../actions/itemAttributes';

const attributesService = client.service('itemAttributes');

function mapStateToProps(state, params) {
    return {
        itemAttributes: state.itemAttributes
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getAttributes() {
            dispatch(getAttributes());
        },
        addAttributes(data) {
            dispatch(addAttributes(data));
        },
        updateAttribute(id, data) {
            dispatch(updateAttribute(id, data));
        },
        setItemAttributes(attributes) {
            dispatch({type: 'SET_ITEM_ATTRIBUTES', attributes});
        }
    }
};


class ItemAttributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            attributes: [],
            current_attribute_id: '',
            new_option_name: ''
        };
        this.onAddAttribute = this.onAddAttribute.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onRemoveType = this.onRemoveType.bind(this);

        // attributesService.find()
        //     .then(attributes => {
        //         if (attributes.length) {
        //             this.props.setItemAttributes(attributes);
        //         }
        //     });

        this.props.getAttributes();
    }

    componentWillReceiveProps(nextProps) {
        let attributes = nextProps.itemAttributes.toJS();
        if (nextProps.itemAttributes.size) {
            this.setState({
                attributes
            });
        }
    }

    onAddAttribute() {
        this.props.addAttributes({name: this.state.name});
        this.setState({
            name: ''
        });
    }

    onAddOption(optionName) {
        let cur_attr_id = this.state.current_attribute_id;
        let attr = this.state.attributes.find(attr => attr.id == cur_attr_id);
        let options = attr.options ? attr.options : [];
        options.push(optionName);
        this.props.updateAttribute(cur_attr_id, {
            name: attr.name,
            options
        });
    }

    updateAttributeState(attrId, name) {
        let attributes = this.state.attributes;
        attributes.map(attr => {
            if (attr.id == attrId) {
                attr.name = name;
            }
        });
        this.setState({
                attributes
            }
        );
    }

    onSave() {
    }

    onRemoveType(id) {

    }

    getAttrItemClass(attrId) {
        return `ItemAttributes__item ${attrId === this.state.current_attribute_id
            ? 'ItemAttributes__item--active' : ''}`;
    }

    render() {
        return (
            <div className="ItemAttributes">
                <div className="ItemAttributes__container form-inline">
                    <h2>
                        Edit item attributes
                    </h2>
                    <ul className="ItemAttributes__list">
                        {this.state.attributes.map(attribute => {
                            return <li className={this.getAttrItemClass(attribute.id)}
                                       key={attribute.id}>
                                <div className="form-group">
                                    <input type="text" className="ItemAttributes__input_text form-control"
                                           value={attribute.name}
                                           onChange={(e) => {
                                               this.updateAttributeState(attribute.id, e.target.value);
                                           }}
                                           onClick={(e) => {
                                               this.setState({
                                                   current_attribute_id: attribute.id
                                               })
                                           }}
                                    />
                                </div>
                            </li>
                        })}
                    </ul>
                    {this.state.current_attribute_id &&
                    <ul className="ItemAttributes__option_list">
                        {this.state.attributes
                            .find(attr => attr.id === this.state.current_attribute_id)
                            .options
                            .map((option, index) => {
                                return <li key={this.state.current_attribute_id + option + index}>
                                    <input type="text" className="ItemAttributes__input_text form-control"
                                           value={option}/>
                                </li>
                            })}
                        <li>
                            <input type="text" className="ItemAttributes__input_text form-control"
                                   value={this.state.new_option_name} onChange={(e) => {
                                this.setState({new_option_name: e.target.value});
                            }}/>
                            <button className="ItemAttributes__btn btn btn-default"
                                    onClick={() => {
                                        this.onAddOption(this.state.new_option_name)
                                    }}>
                                Add new option
                            </button>
                        </li>
                    </ul>
                    }
                    <div className="ItemAttributes__new-block">
                        <div className="form-group">
                            <label htmlFor="item_type_name" className="ItemAttributes__label">
                                Attribute name
                            </label>
                            <input id="item_type_name" type="text" className="ItemAttributes__input_text form-control"
                                   value={this.state.name}
                                   onChange={(e) => {
                                       this.setState({name: e.target.value});
                                   }}/>
                            <button onClick={this.onAddAttribute} className="btn btn-default">Add attribute</button>
                        </div>
                    </div>
                    <p/>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemAttributes);