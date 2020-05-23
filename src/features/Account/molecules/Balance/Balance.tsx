import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as IconWallet } from 'features/Account/assets/icon_wallet.svg';


type Props = {
    amount: number;
    tokenName: string;
}

export const Balance = ({ amount, tokenName, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            <IconWallet />
            <StyledAmount>{amount}</StyledAmount>
            &nbsp;
            {tokenName}
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    color: var(--color-primary-1);
`;

const StyledAmount = styled.strong`
    margin-left: 15px;
`;
