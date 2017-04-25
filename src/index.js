import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/containers/App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import shopApp from './js/reducers';
import {fromJS} from 'immutable';
import thunkMiddleware from 'redux-thunk';



import {getItems} from './js/actions/items';
import {getCollections} from './js/actions/collections';

// admin
import Admin from './js/containers/admin/Admin';
import ItemEditor from './js/containers/admin/ItemEditor';
import Collections from './js/containers/admin/Collections';
import ItemSpecifics from './js/containers/admin/ItemSpecifics';

// routes
import Home from './js/routes/Home';
import Collection from './js/routes/Collection';
import Item from './js/routes/Item';
import CartRoute from './js/routes/Cart';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

let store = createStore(shopApp, {}, applyMiddleware(thunkMiddleware));

// store.subscribe(() => {
//     let state = store.getState();
//     console.log(state.itemTypes);
//     if (state.itemTypes.first()) {
//         state.itemTypes.map(item => {
//             console.log(item.get('name'));
//         });
//     }
// });

store.dispatch(getCollections());

// store.dispatch({
//     type: 'ADD_ITEMS',
//     items: fromJS([
//         {
//             id: 1,
//             imgs: [
//                 "http://i.ebayimg.com/images/g/axcAAOSwt5hYZpST/s-l1600.jpg",
//                 {
//                     original: "http://i.ebayimg.com/images/g/ErsAAOSw241YkBVX/s-l500.jpg",
//                     thumbnail: "http://i.ebayimg.com/images/g/ErsAAOSw241YkBVX/s-l500.jpg"
//                 },
//                 {
//                     original: "http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg",
//                     thumbnail: "http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg"
//                 }
//             ],
//             name: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
//             description: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
//             price: '13.85',
//             collectionId: 1
//         },
//         {
//             id: 2,
//             imgs: [
//                 {original: "http://i.ebayimg.com/images/g/ErsAAOSw241YkBVX/s-l500.jpg"}
//             ],
//             name: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
//             price: '13.85',
//             collectionId: 1
//         },
//         {
//             id: 3,
//             imgs: [
//                 {original: "http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg"}
//             ],
//             name: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
//             price: '13.85',
//             collectionId: 1
//         },
//         {
//             id: 4,
//             imgs: [
//                 {original: "http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg"}
//             ],
//             name: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
//             price: '13.85',
//             collectionId: 2
//         }
//     ])
// });

// store.dispatch({
//     type: 'ADD_ITEM_TO_CART',
//     id: 1
// });

// store.dispatch({
//     type: 'ADD_COLLECTIONS',
//     collections: fromJS([
//         {
//             id: 1, name: 'FASHION CHOKER NECKLACES'
//         },
//         {id: 2, name: 'FASHION BROOCHES'},
//
//         {id: 3, name: 'FASHION EARRINGS'},
//
//         {id: 4, name: 'FASHION NECKLACES'},
//
//         {id: 5, name: 'FASHION UNIQUE RINGS'},
//
//         {id: 6, name: 'FASHION BRACELETS'},
//
//         {id: 7, name: 'GORGEOUS JEWELRY SETS'},
//
//         {id: 8, name: 'SWAROVSKI CRYSTAL CHOKERS'},
//
//         {id: 9, name: 'SWAROVSKI PHONE CASES'},
//
//         {id: 10, name: 'TRAVEL BEAUTY SETS'},
//     ])
// });

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='collection/:name' component={Collection}>
                    <Route path='add' component={ItemEditor}/>
                </Route>
                <Route path='item/:id' component={Item}/>
                <Route path='cart' component={CartRoute}/>
                <Route path='admin' component={Admin}>
                    <Route path='item(/:id)' component={ItemEditor}/>
                    <Route path='itemSpecifics(/:id)' component={ItemSpecifics}/>
                    <Route path='collections' component={Collections}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);


require('./scss/main.scss');
