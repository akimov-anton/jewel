/**
 * Created by Toha on 16.02.2017.
 */
import React, { Component } from 'react';
import Item from '../containers/Item';

class ItemRoute extends Component {
    render() {
        return (
            <div>
                <Item id={this.props.params.id}/>
            </div>
        );
    }
}

export default ItemRoute;