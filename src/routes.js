import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './views/main';
import ProductDetail from './views/product';
import Cart from './views/cart';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/products/:id' component={ProductDetail}/>
            <Route path='/cart' component={Cart}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;