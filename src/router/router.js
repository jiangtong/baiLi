/** @format */

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const asyncComponent = (Component, fallback = null) => {
    return props => {
        return (
            <Suspense fallback={fallback}>
                <Component {...props} />
            </Suspense>
        );
    };
};
// 登陆

const Login = asyncComponent(React.lazy(() => import('@pages/Login')));

// eslint-disable-next-line react/no-multi-comp
const Root = () => {
    return (
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default Root;
