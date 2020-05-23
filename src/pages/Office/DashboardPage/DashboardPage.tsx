import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  USER_STATUS_NO_ETHADDRESS,
  USER_STATUS_WAIT_MINT,
  USER_STATUS_WAIT_REFILL,
  USER_STATUS_TOKENS_DELIVERED,
  paths
} from 'core';
import { useStore } from 'lib';
import { Section1, Head1, Head2, Head3, Button, Tip } from 'ui';
import { EthBlock, EthProcess } from 'features/Account';
import { ProgressBar, BonusMap } from 'features/Crowdsale';


export const DashboardPage = () => {
  const {
    Account: { status },
    Order: { orderExists }
  } = useStore();

  return (
    <>
      {
        status === USER_STATUS_NO_ETHADDRESS && (
          <Section1>
            <EthBlock />
          </Section1>
        )
      }
      {
        (status === USER_STATUS_WAIT_MINT || status === USER_STATUS_WAIT_REFILL) && (
          <Section1>
            <EthProcess/>
          </Section1>
        )
      }
      {
        status === USER_STATUS_TOKENS_DELIVERED && (
          <>
            <Head1>Dashboard</Head1>  
            <Section1>
              <Head2>Public sale</Head2>
              <StyledProgressBar />
              <Head3>Depends on contribution amount:</Head3>
              <StyledBonusMap />
              <StyledTokenSaleText>Public tokensale will start on 1 June, 2019, 00:00 UTC</StyledTokenSaleText>
              <Link to={orderExists ? paths.office.payment.order.pathname : paths.office.payment.calculation.pathname}>
                <StyledButton>
                    BUY TOKEN
                </StyledButton>
              </Link>
            </Section1>
          </>
        )
      }
    </>
  );
};

const StyledProgressBar = styled(ProgressBar)`
  margin-bottom: 40px;
`;

const StyledBonusMap = styled(BonusMap)`
  margin-bottom: 40px;
`;

const StyledTokenSaleText = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  width: 264px;
  margin: 0 auto;
  display: block;
`;
