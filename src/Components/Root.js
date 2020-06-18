
import React from 'react';
import { Route, Switch } from "react-router-dom";

import App from './App/App';
import RainApp from './RainApp/RainApp';

const Root = () => {
    return (
        <div>           
            <Switch>
            <Route component={App} exact path="/"/>
            <Route component={RainApp} exact path="/rain"/>
            </Switch>
        </div>
    )
}

export default Root;