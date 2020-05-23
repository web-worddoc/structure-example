import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { USD, TOKEN_NAME } from 'core';
import { useStore, compose } from 'lib';
import { Head } from 'features/Payment/features/Calculation';


export const Details = compose(observer)((props: any) => {
    const {
        Crowdsale: { basePrice },
        Calculation: {
            totalWithoutBonus,
            bonusPercent,
            bonusTokens,
            total
        }
    } = useStore();

    return (
        <div {...props}>
            <StyledHead>Total amount</StyledHead>
            <InfoWrapper>
                <StyledGroup className="n1">
                    <div>Base price = {(basePrice || 0) / 100} {USD}</div>
                    <div>Tokens {TOKEN_NAME} = {totalWithoutBonus} {TOKEN_NAME}</div>
                </StyledGroup>
                <StyledGroup className="n2">
                    <div>Your bonus = {bonusPercent}%</div>
                    <div>Bonus {TOKEN_NAME} tokens = {bonusTokens} {TOKEN_NAME}</div>
                </StyledGroup>
                <StyledGroup>
                    <div>You get:</div>
                    <StyledTotal>{total} {TOKEN_NAME}</StyledTotal>
                </StyledGroup>
            </InfoWrapper>
        </div>
    )
})

const InfoWrapper = styled.div`
    display: flex;
    overflow: hidden;
`;

const StyledHead = styled(Head)`
    margin-bottom: 20px;
`;

const StyledGroup = styled.div`
    white-space: nowrap;
    min-width: 320px;
    &.n1, &.n2 {
        margin-right: 100px;
        padding-right: 30px;
        border-right: 1px solid rgb(233, 233, 233);
    }
    div:first-of-type {
        margin-bottom: 10px;
    }
    div {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const StyledTotal = styled.div`
    font-size: 20px;
    color: var(--color-primary-1);
`;
