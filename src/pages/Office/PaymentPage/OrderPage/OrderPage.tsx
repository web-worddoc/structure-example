import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { useStore, compose } from 'lib';
import { Section1, Head2, Countdown } from 'ui';
import { OrderDetails, Recipient, Next } from 'features/Payment/features/Order';


export const OrderPage = compose(observer)(() => {
  const {
    Order: { expire, forceExpire }
  } = useStore();

  return (
    <Section1>
      <Header>
        <Head2>Order</Head2>
        {expire &&
          <Countdown until={expire} onReach={forceExpire}/>
        }
      </Header>
      <StyledOrderDetails />
      <StyledRecipient />
      <Next/>
    </Section1>
  )
})

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledOrderDetails = styled(OrderDetails)`
  padding-bottom: 50px;
  margin-bottom: 50px;
  border-bottom: solid 1px rgb(151, 151, 151, .2);
`;

const StyledRecipient = styled(Recipient)`
  padding-bottom: 80px;
  margin-bottom: 30px;
  border-bottom: solid 1px rgb(151, 151, 151, .2);
`;
