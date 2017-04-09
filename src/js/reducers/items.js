/**
 * Created by Toha on 09.03.2017.
 */


import {List, fromJS} from 'immutable';


const items = (state = new List(), action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return state.concat(fromJS(action.items));
        default:
            return state;
    }
};

export default items;