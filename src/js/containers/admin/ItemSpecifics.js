/**
 * Created by Toha on 09.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveItemSpecific, getItemSpecifics, removeItemSpecific} from '../../actions/itemSpecifics';

function mapStateToProps(state, params) {
    return {
        itemSpecifics: state.itemSpecifics
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        save(data) {
            dispatch(saveItemSpecific(data));
        },
        getItemSpecifics() {
            dispatch(getItemSpecifics());
        },
        removeItemSpecific(id) {
            dispatch(removeItemSpecific(id));
        }
    }
};


class ItemSpecifics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            fields: ['']
        };
        this.onAddField = this.onAddField.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onRemoveType = this.onRemoveType.bind(this);

        this.props.getItemSpecifics();
    }

    onAddField() {
        let fields = this.state.fields;
        fields.push('');
        this.setState({
            fields: fields
        });
    }

    onSave() {
        this.props.save(this.state);
    }

    onRemoveType(id) {
        this.props.removeItemSpecific(id);
    }

    render() {
        return (
            <div className="ItemSpecific">
                <div className="ItemSpecific__container">
                    {this.props.itemSpecifics.map(type => {
                        return <table key={type.get('id')} className="table table-bordered">
                            <thead>
                            <tr>
                                <td>
                                    {type.get('name')}
                                </td>
                                <td>
                                    <button className="btn btn-default" onClick={(e) => {
                                        this.onRemoveType(type.get('id'))
                                    }}>
                                        Remove type
                                    </button>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            {type.get('fields').map(field => {
                                return <tr key={field}>
                                    <td>{field}</td>
                                    <td></td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    })}
                    <div className="form-group">
                        <label htmlFor="item_type_name" className="ItemSpecific__label">
                            Item type name
                        </label>
                        <input id="item_type_name" type="text" className="ItemSpecific__input_text form-control" value={this.state.name}
                               onChange={(e) => {
                                   this.setState({name: e.target.value});
                               }}/>
                    </div>
                    <div className="form-group">
                        <label className="ItemEditor__label">
                            Item types values
                        </label>
                        {this.state.fields.map((field, i) => {
                            return <div key={i}>

                                <input type="text" className="ItemEditor__input_text form-control" value={field}
                                       onChange={(e) => {
                                           let fields = this.state.fields;
                                           fields[i] = e.target.value;
                                           this.setState({fields: fields})
                                       }}/>
                                {/*Value*/}
                                {/*<input type="text" className="ItemEditor__input_text" value={field.value}*/}
                                {/*onChange={(e) => {*/}
                                {/*let fields = this.state.fields;*/}
                                {/*fields[i].value = e.target.value;*/}
                                {/*this.setState({fields: fields})*/}
                                {/*}}/>*/}
                            </div>
                        })}
                    </div>
                    <button onClick={this.onAddField} className="btn btn-default">Add field</button>
                    <p/>
                    <button onClick={this.onSave} className="btn btn-primary">Save</button>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemSpecifics);