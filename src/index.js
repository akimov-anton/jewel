import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import Home from './js/routes/Home';
import Collections from './js/routes/Collections';
import Item from './js/routes/Item';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='collections' component={Collections} />
            <Route path='item' component={Item} />
        </Route>
    </Router>,
  document.getElementById('root')
);
