/**
 * Created by Toha on 28.04.2017.
 */


import {fromJS, List} from 'immutable';


const pages = (pages = new List(), action) => {
    switch (action.type) {
        case 'ADD_PAGE':
            let item = fromJS(action.item);
            if (!pages.find(col => col.get('id') === item.get('id'))) {
                return pages.push(item);
            } else {
                return pages;
            }
        case 'REMOVE_PAGE':
            return pages.delete(pages.findIndex(collection => {
                return collection.get('id') === action.id;
            }));
        default:
            return pages;
    }
};

export default pages;