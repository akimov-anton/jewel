/**
 * Created by anton on 16.02.17.
 */
import React, { Component } from 'react';
import CollectionComponent from '../containers/Collection';

class Collection extends Component {
    render() {
        return (
            <div>
                <CollectionComponent name={this.props.params.name}/>
            </div>
        );
    }
}

export default Collection;

