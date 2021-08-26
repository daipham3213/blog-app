import React, { lazy } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import NotFound from '../components/common/NotFound';
import RouteWithLayout from '../components/common/RouteWithLayout';
import MinimalLayout from '../components/layout/Minimal/MinimalLayout';
import MainLayout from '../components/layout/Main/MainLayout';

const Auth = lazy(() => import('../pages/auth/AuthPage'));
const Home = lazy(() => import('../components/layout/Main/MainLayout'));

const Routes = () => {
    return (
        <Switch>
            <RouteWithLayout
                path='/login'
                component={Auth}
                exact
                layout={MinimalLayout}
            />
            <RouteWithLayout
                path={'/'}
                component={Home}
                exact
                layout={MainLayout}
            />
            <RouteWithLayout
                component={NotFound}
                exact
                layout={MinimalLayout}
                path='/not-found'
            />
            <Redirect to='/not-found' />
        </Switch>
    );
};

export default Routes;