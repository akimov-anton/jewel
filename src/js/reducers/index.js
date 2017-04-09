/**
 * Created by Toha on 09.03.2017.
 */

import { combineReducers } from 'redux'
import cart from './cart'
import user from './user'
import items from './items'
import itemSpecifics from './itemSpecifics'
import collections from './collections'

const shopApp = combineReducers({
    cart,
    // user,
    items,
    itemSpecifics,
    collections
});

export default shopApp;