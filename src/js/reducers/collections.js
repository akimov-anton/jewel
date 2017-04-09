/**
 * Created by Toha on 17.03.2017.
 */

import {fromJS, List} from 'immutable';


const collections = (collections = new List(), action) => {
    switch (action.type) {
        case 'ADD_COLLECTIONS':
            return collections.concat(fromJS(action.items));
        case 'REMOVE_COLLECTION':
            return collections.delete(collections.findIndex(collection => {
                return collection.get('id') === action.id;
            }));
        default:
            return collections;
    }
};

export default collections;