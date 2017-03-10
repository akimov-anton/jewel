/**
 * Created by Toha on 09.03.2017.
 */

import { combineReducers } from 'redux'
import cart from './cart'
import user from './user'
import items from './items'

const shopApp = combineReducers({
    cart,
    // user,
    items
});

export default shopApp;