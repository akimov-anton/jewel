/**
 * Created by Toha on 28.04.2017.
 */


import {fromJS, List} from 'immutable';


const pages = (pages = new List(), action) => {
    let item = fromJS(action.item);
    switch (action.type) {
        case 'ADD_PAGE':
            if (!pages.find(page => page.get('id') === item.get('id'))) {
                return pages.push(item);
            } else {
                return pages;
            }
        case 'UPDATE_PAGE':
            return pages.set(pages.findIndex(page => page.get('id') === item.get('id')), item);
        case 'REMOVE_PAGE':
            return pages.delete(pages.findIndex(collection => collection.get('id') === action.id));
        default:
            return pages;
    }
};

export default pages;