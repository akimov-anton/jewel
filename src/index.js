import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/containers/App';

// routes
import Home from './js/routes/Home';
import Collection from './js/routes/Collection';
import Item from './js/routes/Item';
import CartRoute from './js/routes/Cart';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import shopApp from './js/reducers';
import {fromJS} from 'immutable';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

let store = createStore(shopApp);

store.subscribe(() => {
    console.log(store.getState().collections.toJSON());
});

store.dispatch({
    type: 'ADD_ITEMS',
    items: fromJS([
        {
            id: 1,
            imgs: [
                {
                    original: "http://i.ebayimg.com/images/g/axcAAOSwt5hYZpST/s-l1600.jpg",
                    thumbnail: "http://i.ebayimg.com/images/g/axcAAOSwt5hYZpST/s-l1600.jpg"
                },
                {
                    original: "http://i.ebayimg.com/images/g/ErsAAOSw241YkBVX/s-l500.jpg",
                    thumbnail: "http://i.ebayimg.com/images/g/ErsAAOSw241YkBVX/s-l500.jpg"
                },
                {
                    original: "http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg",
                    thumbnail: "http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg"
                }
            ],
            name: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
            description: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
            price: '13,85',
            collectionId: 1
        },
        {
            id: 2,
            imgs: [
                {original: "http://i.ebayimg.com/images/g/ErsAAOSw241YkBVX/s-l500.jpg"}
            ],
            name: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
            price: '13,85',
            collectionId: 1
        },
        {
            id: 3,
            imgs: [
                {original: "http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg"}
            ],
            name: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
            price: '13,85',
            collectionId: 1
        },
        {
            id: 4,
            imgs: [
                {original: "http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg"}
            ],
            name: 'FLOWER PEARL ETERNITY WHITE GOLD PLATED LAST FASHION MULTI LAYERS RING 2017',
            price: '13,85',
            collectionId: 2
        }
    ])
});

store.dispatch({
    type: 'ADD_ITEM_TO_CART',
    id: 1
});

store.dispatch({
    type: 'ADD_COLLECTIONS',
    collections: fromJS([
        {
            id: 1, name: 'SWAROVSKI CRYSTAL CHOKERS'
        },
        {id: 2, name: 'FASHION CHOKER NECKLACES'}
    ])
});


require('./scss/main.scss');


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='collection/:name' component={Collection}/>
                <Route path='item/:id' component={Item}/>
                <Route path='cart' component={CartRoute}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
