import React, { Suspense, lazy } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Cart = lazy(() => import('./views/cart'));
const Main = lazy(() => import('./views/main'));
const ProductDetail = lazy(() => import('./views/product'));

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/products/:id' component={ProductDetail} />
                <Route path='/cart' component={Cart} />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default Routes;