/**
 * Created by Toha on 17.03.2017.
 */

import {Map, List} from 'immutable';


const collections = (state = new List(), action) => {
    switch (action.type) {
        case 'ADD_COLLECTIONS':
            return state.merge(new List(action.collections));
        default:
            return state;
    }
};

export default collections;