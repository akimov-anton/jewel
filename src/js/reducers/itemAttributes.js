import {List, fromJS} from 'immutable';

const itemAttributes = (itemAttributes = new List(), action) => {
    switch (action.type) {
        case 'SET_ITEM_ATTRIBUTES':
            return fromJS(action.attributes);
        case 'ADD_ITEM_ATTRIBUTE':
            let item = fromJS(action.attribute);
            if (!itemAttributes.find(i => i.get('id') === item.get('id'))) {
                return itemAttributes.push(item);
            } else {
                return itemAttributes;
            }
        case 'EDIT_ITEM_ATTRIBUTE':
            let newColor = fromJS(action.attribute);
            return itemAttributes.set(itemAttributes.findIndex(attribute => {
                return attribute.get('id') === newColor.get('id');
            }), newColor);
        case 'REMOVE_ITEM_ATTRIBUTES':
            return itemAttributes.delete(itemAttributes.findIndex(attribute => {
                return attribute.get('id') === action.id;
            }));
        default:
            return itemAttributes;
    }
};

export default itemAttributes;