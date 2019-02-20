import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Providor} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import App from './App';


const store = createStore()


ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>
</Provider>    
    , document.getElementById('root'));

