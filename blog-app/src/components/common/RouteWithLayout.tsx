import { Route, RouteProps } from 'react-router-dom';

interface IRouteWithLayout extends RouteProps{
    component: any,
    layout: any,
    path: string,
}

const RouteWithLayout = (props: IRouteWithLayout) => {
    const { layout: Layout, component: Component, ...rest } = props;

    return (
        <Route
            {...rest}
            render={matchProps => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    );
};

export default RouteWithLayout;