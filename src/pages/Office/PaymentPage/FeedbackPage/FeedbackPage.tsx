import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { paths } from 'core';
import { Section1, Head2, Tip, Button } from 'ui'; 

  
export const FeedbackPage = (props: any) => (
  <Section1 {...props}>
    <Head2>Your transaction is already on its way to your wallet!</Head2>
    <StyledTip>
      Your transaction is being mined by the crypto network and will arrive as soon as a block will be added to the chain!
      You can check your transaction status by pressing the "Go to transactions" button below.
    </StyledTip>
    <StyledLink to={paths.office.payment.order.pathname}>
      <Button transparent>BACK TO ORDER</Button>
    </StyledLink>
    <Link to={paths.office.transactions.pathname}>
      <Button>TO TRANSACTIONS</Button>
    </Link>
  </Section1>
);

const StyledTip = styled(Tip)`
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  margin-right: 20px;
`;
