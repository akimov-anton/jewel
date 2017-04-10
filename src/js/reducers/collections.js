/**
 * Created by Toha on 17.03.2017.
 */

import {fromJS, List} from 'immutable';


const collections = (collections = new List(), action) => {
    switch (action.type) {
        // case 'ADD_COLLECTIONS':
        case 'ADD_COLLECTION':
            let item = fromJS(action.item);
            if (!collections.find(col => col.get('id') === item.get('id'))) {
                return collections.push(item);
            } else {
                return collections;
            }
        case 'REMOVE_COLLECTION':
            return collections.delete(collections.findIndex(collection => {
                return collection.get('id') === action.id;
            }));
        default:
            return collections;
    }
};

export default collections;