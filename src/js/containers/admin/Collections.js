/**
 * Created by Toha on 06.04.2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveCollection, getCollections, removeCollection} from '../../actions/collections';

function mapStateToProps(state, params) {
    return {
        collections: state.collections
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveItem: (collectionInfo) => {
            if (collectionInfo) {
                dispatch(saveCollection(collectionInfo), response => {
                    console.log(response);
                });
            }
        },
        removeItem(id) {
            dispatch(removeCollection(id));
        },
        getCollections: () => {
            dispatch(getCollections());
        }
    }
};

class Collections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collection: {
                name: ''
            },
            collections: props.collections
        };

        this.onSave = this.onSave.bind(this);
        this.onRemove = this.onRemove.bind(this);

        // this.props.getCollections();
    }

    onSave() {
        this.props.saveItem(this.state.collection);
    }

    onRemove(id) {
        this.props.removeItem(id);
    }

    render() {
        return (
            <div className="Collections">
                <div className="Collections__container form-inline">

                    {this.props.collections.map(collection =>
                        <div key={collection.get('id')} className="">
                            {collection.get('name')}
                            <button className="btn btn-default" onClick={(e) => {
                                this.onRemove(collection.get('id'));
                            }}>Remove
                            </button>
                        </div>
                    )}

                    <div className="form-group">
                        <h3>Create new collection</h3>
                        <label htmlFor="collection_name" className="Collections__label">
                            Collection name
                        </label>
                        <input id="collection_name" type="text" className="Collections__input_text form-control"
                               value={this.state.collection.name}
                               onChange={(e) => {
                                   this.setState({collection: {...this.state.collection, name: e.target.value}})
                               }}/>

                        <button className="Collections__btn btn btn-default" onClick={this.onSave}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collections);