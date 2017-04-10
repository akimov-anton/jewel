/**
 * Created by Toha on 09.03.2017.
 */

import {List, fromJS} from 'immutable';


const items = (items = new List(), action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return items.concat(fromJS(action.items));
        case 'ADD_ITEM':
            let item = fromJS(action.item);
            if (!items.find(i => i.get('id') === item.get('id'))) {
                return items.push(item);
            } else {
                return items;
            }
        default:
            return items;
    }
};

export default items;