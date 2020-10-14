import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Delivery from './pages/Delivery';
import Home from './components/Home';
import Create from './components/delivery/Create';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/*<Route path="/" exact component={Delivery} /> */}
                <Route path={'/'} exact component={Home} />
                <Route path={'/create'} exact component={Create} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;