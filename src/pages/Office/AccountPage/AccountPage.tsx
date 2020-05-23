import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Section1, Head1, Head2 } from 'ui';
import { PasswordForm, EthAddress } from 'features/Account';


export const AccountPage = () => {
  return (
    <>
      <Head1>Account</Head1>
      <Section1>
        <Head2>Password</Head2>
        <StyledPasswordForm />
        <EthAddress/>
      </Section1>
    </>
  )
}

const StyledPasswordForm = styled(PasswordForm)`
  margin-bottom: 50px;
`;
