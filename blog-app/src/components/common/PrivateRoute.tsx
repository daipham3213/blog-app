import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import AuthenticateService from '../../services/authenticate.service';


interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component?: any;
    // tslint:disable-next-line:no-any
    children?: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, children, ...rest } = props;

    return (
        <Route
            {...rest}
            render={routeProps =>
                AuthenticateService.IsLoggedIn() ? (
                    Component ? (
                        <Component {...routeProps} />
                    ) : (
                        children
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: { from: routeProps.location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;