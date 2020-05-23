import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as IconWallet } from 'features/Account/assets/icon_wallet_black.svg';


type Props = {
    amount: number;
    tokenName: string;
    from: string;
}

export const BalanceSource = ({ amount, tokenName, from, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            <StyledTitle>{from}</StyledTitle>
            <StyledAmountWrapper>
                <IconWallet />
                <StyledAmount>{amount}</StyledAmount>
                &nbsp;
                {tokenName}
            </StyledAmountWrapper>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    padding: 12px 19px;
`;

const StyledTitle = styled.div`
    color: rgb(31, 31, 31, .7);
    &:first-letter {
        text-transform: uppercase;
    }
`;

const StyledAmountWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
`;

const StyledAmount = styled.strong`
    margin-left: 15px;
`;
