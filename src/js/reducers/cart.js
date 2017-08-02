/**
 * Created by Toha on 09.03.2017.
 */

import {List, Map} from 'immutable';


const cartItems = (items = new List(), action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            if (items.find(item => item.get('id') === action.id)) {
                return updateCount(items, action);
            } else {
                return items.push(new Map({
                    id: action.id,
                    count: action.count || 1
                }));
            }
        case 'CHANGE_ITEM_COUNT_IN_CART':
            return updateCount(items, action);
        case 'REMOVE_ITEM_FROM_CART':
            return items.delete(items.findIndex(item => {
                return item.get('id') === action.id;
            }));
        default:
            return items;
    }
};

const cart = (state = new Map(), action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
        case 'CHANGE_ITEM_COUNT_IN_CART':
        case 'REMOVE_ITEM_FROM_CART':
            return state.update('items', items => cartItems(items, action));
        default:
            return state;
    }
};

function updateCount(items, data) {
    return items.update(items.findIndex(item => item.get('id') === data.id), item => {
        return item.set('count', data.count);
    });
}
export default cart;