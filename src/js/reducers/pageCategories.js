/**
 * Created by Toha on 03.05.2017.
 */
import {fromJS, List} from 'immutable';


const categories = (categories = new List(), action) => {
    switch (action.type) {
        case 'ADD_PAGE_CATEGORY':
            let item = fromJS(action.item);
            if (!categories.find(pageCategory => pageCategory.get('id') === item.get('id'))) {
                return categories.push(item);
            } else {
                return categories;
            }
        // case 'REMOVE_PAGE':
        //     return pages.delete(pages.findIndex(collection => {
        //         return collection.get('id') === action.id;
        //     }));
        default:
            return categories;
    }
};

export default categories;