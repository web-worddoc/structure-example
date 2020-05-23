import * as React from 'react';
import styled from 'styled-components';

import { Head2, Tip, BigLoader } from 'ui';


export const EthProcess = (props: any) => {
    return (
        <StyledRoot {...props}>
            <StyledHead2 centered>Processing...</StyledHead2>
            <StyledInfo>
                We are processing your request. Once token get transferred to your Keeper contract, you'll see it on dashboard and receive email notification
            </StyledInfo>
            <LoaderWrapper>
                <BigLoader/>
            </LoaderWrapper>
            <Tip hasOffset className="n2">
                It usually gets 2-6 hours to prepare your Keeper and mint your tokens.
            </Tip>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`

`;

const LoaderWrapper = styled.div`
    border-radius: 3px;
    background: rgb(251, 251, 251);
    padding: 80px 164px;
    margin-bottom: 30px;
`;

const StyledHead2 = styled(Head2)`
    margin-bottom: 21px;
`;

const StyledInfo = styled.div`
    margin-bottom: 30px;
    text-align: center;
`;
