import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { applyGuards } from 'lib';


type Props = {
    routes: any;
    context?: Context;
    switchProps?: any;
}

type Context = {
    isSessionActive?: boolean | null;
    userStatus?: string | null;
    canInvest?: boolean | null;
    orderExists?: boolean | null;
}

export const Routes = ({ routes, context, switchProps }: Props) => {
    if (!routes || !routes.length) return <></>;

    return (
        <Switch {...switchProps}>
            {applyGuards(routes, context).map((route: any, i: number) => {
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            exact={'exact' in route ? route.exact : true}
                            strict={'strict' in route && route.strict}
                            sensitive={'sensitive' in route && route.sensitive}
                            render={(props: any) => (
                                <route.component route={route} {...props} />
                            )}
                        />
                );
            })}
        </Switch>
    );
};

Routes.defaultProps = {
    context: {}
}
