/**
 * Created by Toha on 09.03.2017.
 */


import {Map} from 'immutable';


const items = (state = new Map(), action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return state.merge(new Map(action.items));
        default:
            return state;
    }
};

export default items;