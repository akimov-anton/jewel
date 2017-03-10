/**
 * Created by Toha on 09.03.2017.
 */

import {Map} from 'immutable';


const cart = (state = new Map(), action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            // debugger;
            return state.merge(Map({
                id: action.id,
                count: action.count || 1
            }));
        default:
            return state;
    }
}

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