/**
 * Created by Toha on 09.03.2017.
 */

import { combineReducers } from 'redux'
import cart from './cart'
import user from './user'
import items from './items'
import itemSpecifics from './itemSpecifics'
import itemAttributes from './itemAttributes'
import collections from './collections'
import pages from './pages'
import pageCategories from './pageCategories'

const shopApp = combineReducers({
    cart,
    user,
    items,
    itemSpecifics,
    itemAttributes,
    collections,
    pages,
    pageCategories
});

export default shopApp;