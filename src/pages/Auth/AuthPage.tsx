import React from 'react';
import { observer } from 'mobx-react';

import { Routes, useStore, compose } from 'lib';
import { AuthTemplate, Header, Footer } from 'ui';


type Props = {
    route: any,
}

export const AuthPage = compose(observer)(({ route }: Props) => {
    const {
        Account: { status }
    } = useStore();

    const context = React.useMemo(() => ({
        userStatus: status
    }), [status]);

    return (
        <AuthTemplate header={<Header/>} footer={<Footer/>}>
            <Routes routes={route.routes} context={context}/>
        </AuthTemplate>
    );
});
