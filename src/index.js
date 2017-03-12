import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';

// routes
import Home from './js/routes/Home';
import Collections from './js/routes/Collections';
import Item from './js/routes/Item';
import CartRoute from './js/routes/Cart';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import shopApp from './js/reducers';
import {fromJS} from 'immutable';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

let store = createStore(shopApp);

store.subscribe(() => {
    console.log(store.getState().cart.toJSON());
});

store.dispatch({
    type: 'ADD_ITEMS',
    items: fromJS({
        1: {
            id: 1,
            img_src: "http://i.ebayimg.com/images/g/axcAAOSwt5hYZpST/s-l1600.jpg"
        },
        2: {
            id: 2,
            img_src: "http://i.ebayimg.com/images/g/ErsAAOSw241YkBVX/s-l500.jpg"
        },
        3: {
            id: 3,
            img_src: "http://i.ebayimg.com/images/g/Rv4AAOSw4CFYvgbU/s-l1600.jpg"
        }
    })
});

// store.dispatch({
//     type: 'ADD_ITEM_TO_CART',
//     id: 1
// });


require('./scss/main.scss');


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='collections' component={Collections}/>
                <Route path='item' component={Item}/>
                <Route path='cart' component={CartRoute}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
