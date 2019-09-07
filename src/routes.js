import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './views/main';
import ProductDetail from './views/product';
import Card from './views/card';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/products/:id' component={ProductDetail}/>
            <Route path='/card' component={Card}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;