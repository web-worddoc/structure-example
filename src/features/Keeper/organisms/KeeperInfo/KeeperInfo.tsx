import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { humanizeUTC } from 'og-utils';

import { TOKEN_NAME } from 'core';
import { useStore, compose } from 'lib';
import { Tip } from 'ui';


export const KeeperInfo = compose(observer)((props: any) => {

    const {
        Keeper: { balance, startUnfreezingDate, totalUnfreezingDate }
    } = useStore();

    return (
        <StyledRoot {...props}>
            <Tip>
                Since {startUnfreezingDate ? humanizeUTC(startUnfreezingDate, 'DD MMM YYYY HH:MM') : ''} withdrawals will be available at rate 200 SWG / Day<br/>
                All the funds will be unlocked on {totalUnfreezingDate ? humanizeUTC(totalUnfreezingDate, 'DD MMM YYYY HH:MM') : ''}
            </Tip>
            <StyledTotal>
                <StyledTotalTitle>Tokens total on the Keeper</StyledTotalTitle>
                <StyledBalance>{balance} {TOKEN_NAME}</StyledBalance>
            </StyledTotal>
        </StyledRoot>
    )
})

const StyledRoot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledTotal = styled.div`
    
`;

const StyledTotalTitle = styled.div`
    color: rgb(33, 33, 33, .6);
    margin-bottom: 3px;
`;

const StyledBalance = styled.div`
    color: var(--color-primary-1);
    font-size: 35px;
`;
