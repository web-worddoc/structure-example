import React from 'react';
import { observer } from 'mobx-react';

import { Routes, useStore, compose } from 'lib';
import { OfficeTemplate, OfficeHeader } from 'ui';


type Props = {
    route: any
}

export const OfficePage = compose(observer)(({ route }: Props) => {
    const {
        Account: { canInvest }
    } = useStore();

    return (
        <OfficeTemplate header={<OfficeHeader />} footer={<></>}>
            <Routes routes={route.routes} context={{ canInvest }}/>
        </OfficeTemplate>
    );
});
