import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getAttributes} from '../../actions/itemAttributes';

function mapStateToProps(state) {
    return {
        attributes: state.itemAttributes
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getAttributes() {
            dispatch(getAttributes());
        }
    }
}

class ItemAttributes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            attributes: []
        };

        this.props.getAttributes();

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.attributes.size) {
            this.setState({
                attributes: nextProps.attributes.toJS()
            });
        }
    }

    onToggleOption(attrId, option) {
        if (this.props.onToggleOption) {
            this.props.onToggleOption(attrId, option);
        }
    }

    onSelectAttribute(attr) {
        if (this.props.onSelectAttribute) {
            this.props.onSelectAttribute(attr);
        }
    }

    onRemoveAttribute(attrId) {
        if (this.props.onRemoveAttribute) {
            this.props.onRemoveAttribute(attrId);
        }
    }

    getAttrNameById(id) {
        let attr = this.state.attributes ? this.state.attributes.find(attr => attr.id === id) : null;
        return attr ? attr.name : '';
    }

    getClassForOptionBtn(attrId, optionName) {
        let optionSelected = false;
        if (this.props.selectedAttributes.length) {
            let attr = this.isAttrSelected(attrId);
            if (attr) {
                optionSelected = attr.options.find(option => option.name ==  optionName);
            }
        }
        return `btn ${optionSelected ? 'btn-success' : 'btn-default' }`
    }

    getClassForAttribute() {
        let modifier = !this.props.onSelectAttribute ? 'ItemAttributes__attribute--disabled' : '';
        if (!this.props.onRemoveAttribute) {
            modifier += 'ItemAttributes__attribute--hide-close-btn'
        }
        return `ItemAttributes__attribute ${modifier}`;
    }

    isAttrSelected(attrId) {
        return this.props.selectedAttributes.find(attr => attr.id === attrId);
    }

    isAttrHasSelectedOptions(attrId) {
        let attr = this.props.selectedAttributes.find(attr => attr.id === attrId);
        return attr.options.length;
    }

    canShowAttribute(attrId) {
        if (!this.props.showOnlySelected) {
            return true;
        } else {
            if (this.isAttrSelected(attrId)) {
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div className="ItemAttributes">
                <div className="ItemAttributes__container">
                    {this.state.attributes && this.state.attributes.map(attr => {
                        return this.canShowAttribute(attr.id) &&
                            <div className="ItemAttributes__attribute_wrapper" key={attr.id}>
                                <div className={this.getClassForAttribute()} onClick={e => {
                                    this.onSelectAttribute(attr)
                                }}>
                                    {attr.name ? attr.name : this.getAttrNameById(attr.id)}
                                    <span className="ItemAttributes__attribute_close" onClick={e => {
                                        this.onRemoveAttribute(attr.id)
                                    }}>&#10006;</span>
                                </div>
                                <div className="ItemAttributes__attribute_options">
                                    {attr.options.map(option => {
                                        return <div className="ItemAttributes__attribute_option"
                                                    key={`${attr.id}_${option}`}>
                                            <button onClick={e => {
                                                this.onToggleOption(attr.id, option);
                                            }}
                                                    className={this.getClassForOptionBtn(attr.id, option)}>
                                                {option}
                                            </button>
                                        </div>
                                    })}
                                </div>

                            </div>
                    })}
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemAttributes);