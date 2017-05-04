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
import Pages from './js/containers/admin/Pages';
import PageEditor from './js/containers/admin/PageEditor';

// routes
import Home from './js/routes/Home';
import Collection from './js/routes/Collection';
import Item from './js/routes/Item';
import CartRoute from './js/routes/Cart';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Page from './js/containers/Page';

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
                    <Route path='pages' component={Pages}/>
                    <Route path='page/:link' component={PageEditor}/>
                </Route>
                <Route path='page/:link' component={Page}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);


require('./scss/main.scss');
