import React from 'react';
import { observer } from 'mobx-react';

import { ThemeStyles } from 'ThemeStyles';
import { GlobalStyles } from 'GlobalStyles';
import { Routes, useStore, compose } from 'lib';
import { routes } from './routes';


export const App = compose(observer)(() => {
    const {
        Session: { isActive },
        Account:  { status }
    } = useStore();

    return (
        <>
            <GlobalStyles />
            <Routes routes={routes} context={{
                isSessionActive: isActive,
                userStatus: status
            }}/>
            <ThemeStyles/>
        </>
    )
});
