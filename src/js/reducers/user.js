/**
 * Created by Toha on 09.03.2017.
 */
import {Map} from 'immutable';


const user = (state = new Map({}), action) => {
    switch (action.type) {
        case 'ADD_INFO':
            return state.merge(Map(action));
        default:
            return state
    }
};

export default user;