/**
 * Created by Toha on 09.03.2017.
 */

import {List, Map} from 'immutable';


const cartItems = (state = new List(), action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return state.push(new Map({
                id: action.id,
                count: action.count || 1
            }));
        default:
            return state;
    }
};

const cart = (state = new Map(), action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return state.update('items', items => cartItems(items, action));
        default:
            return state;
    }
};

// const todos = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [
//                 ...state,
//                 todo(undefined, action)
//             ]
//         case 'TOGGLE_TODO':
//             return state.map(t =>
//                 todo(t, action)
//             )
//         default:
//             return state
//     }
// }

export default cart;