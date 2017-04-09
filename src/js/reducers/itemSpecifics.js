/**
 * Created by Toha on 09.04.2017.
 */

import {List, fromJS} from 'immutable';

const itemTypes = (itemTypes = new List(), action) => {
    switch (action.type) {
        case 'ADD_ITEM_SPECIFICS':
            return itemTypes.concat(fromJS(action.items));
        case 'REMOVE_ITEM_SPECIFIC':
            return itemTypes.delete(itemTypes.findIndex(type => {
                return type.get('id') === action.id;
            }));
        default:
            return itemTypes;
    }
};

export default itemTypes;