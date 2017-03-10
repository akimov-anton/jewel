import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import Home from './js/routes/Home';
import Collections from './js/routes/Collections';
import Item from './js/routes/Item';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import shopApp from './js/reducers';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

let store = createStore(shopApp);

store.subscribe(() => {
    console.log(store.getState().cart.toJSON());
});

store.dispatch({
    type: 'ADD_ITEMS',
    items: {
        1: {
            id: 1,
            img_src: "http://i.ebayimg.com/images/g/axcAAOSwt5hYZpST/s-l1600.jpg"
        },
        2: {
            id: 2,
            img_src: "http://i.ebayimg.com/images/g/ErsAAOSw241YkBVX/s-l500.jpg"
        }
    }
});



ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='collections' component={Collections}/>
                <Route path='item' component={Item}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
