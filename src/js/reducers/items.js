/**
 * Created by Toha on 09.03.2017.
 */


import {List} from 'immutable';


const items = (state = new List(), action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return state.merge(new List(action.items));
        default:
            return state;
    }
};

export default items;