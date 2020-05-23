import * as React from 'react';
import styled from 'styled-components';

import { Section1, Head2, Tip } from 'ui';
import { EthForm } from './../EthForm';


export const EthBlock = (props: any) => {
    return (
        <div {...props}>
            <StyledHead2>We need your ETH Address</StyledHead2>
            <StyledTip hasOffset className="n1">
              To make tokens available for you we need your ETH address. The tokens will be kept on Keeper
              smart-contract, so you can use any wallet supporting smart contract operations. The best choice is
              Metamask plugin for Chrome, Opera and Firefox.
            </StyledTip>
            <StyledEthForm/>
            <StyledTip hasOffset>
              Please ensure your wallet is secure and you have private key or seed phrase backup.
            </StyledTip>
        </div>
    )
}

const StyledHead2 = styled(Head2)`
  padding-left: 40px;
`;

const StyledTip = styled(Tip)`
  max-width: 70%;
  &.n1 {
    margin-bottom: 30px;
  }
`;

const StyledEthForm = styled(EthForm)`
  margin-bottom: 30px;
`;
