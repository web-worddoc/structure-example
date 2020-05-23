import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { TOKEN_NAME } from 'core';
import { useStore, compose } from 'lib';


export const OrderDetails = compose(observer)((props: any) => {
    const {
        Order: { amount, tokenAmount, currency }
    } = useStore();

    return (
        <div {...props}>
            <StyledTitle>Payment</StyledTitle>
            <StyledConversion>
                {tokenAmount} <span>{TOKEN_NAME} =</span> {amount} <span>{currency}</span>
            </StyledConversion>
            <StyledInfo>
                Current exchange rate is frozen for 15 minutes<br />
            </StyledInfo>
        </div>
    )
})

const StyledTitle = styled.div`
    margin-bottom: 10px;
`;

const StyledConversion = styled.div`
    font-size: 45px;
    color: rgb(21, 43, 88);
    font-weight: 400;
    margin-bottom: 10px;
    span {
        font-size: 25px;
    }
`;

const StyledInfo = styled.div`
    color: rgb(0,0,0,.4);
`;
