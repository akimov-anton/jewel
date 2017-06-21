/**
 * Created by Toha on 09.03.2017.
 */
import {Map} from 'immutable';


const user = (state = new Map({}), action) => {
    switch (action.type) {
        case 'ADD_USER':
            return state.merge(Map(action.data));
        case 'REMOVE_USER':
            return new Map();
        default:
            return state
    }
};

export default user;