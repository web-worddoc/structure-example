import * as React from 'react';
import styled from 'styled-components';

import { TOKEN_NAME } from 'core';
import { ReactComponent as IconWallet } from 'features/Account/assets/icon_wallet.svg';


type Props = {
    amount: number;
    tokenName: string;
}

export const DropdownBalance = ({ amount, tokenName, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            <StyledTitle>Total Balance:</StyledTitle>
            <StyledAmountWrapper>
                <IconWallet/>
                <StyledAmount>{amount}</StyledAmount>
                &nbsp;
                {tokenName}
            </StyledAmountWrapper>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
`;

const StyledTitle = styled.strong`
    color: rgb(31, 31, 31, .7);
`;

const StyledAmountWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--color-primary-1);
    font-size: 20px;
`;

const StyledAmount = styled.strong`
    margin-left: 8px;
`;
