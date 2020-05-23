import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { useStore, compose } from 'lib';
import { Head1, Head2, Section1, Tip } from 'ui';
import { NotSupported, NotInjected, NotUnlocked, KeeperInfo, WithdrawalForm } from 'features/Keeper';


export const KeeperPage = compose(observer)(() => {
  const {
    Web3: { isProviderReady, isProviderInjected, isProviderUnlocked, isSupported },
    Keeper: { fetched }
  } = useStore();

  return (
    <>
      {isProviderInjected !== null && !isProviderInjected && <NotInjected/>}
      {isProviderInjected && isProviderUnlocked !== null && !isProviderUnlocked && <NotUnlocked />}
      {isSupported !== null && !isSupported && <NotSupported />}
      {isProviderReady && fetched &&
        <>
          <Head1>Keeper</Head1>
          <Section1>
            <Head2>Available for withdrawal:</Head2>
            <StyledKeeperInfo/>
            <StyledWithdrawalForm />
            <Tip hasOffset>* Ethereum wallet must support ERC-20 tokens</Tip>
          </Section1>
        </>
      }
    </>
  )
})

const StyledWithdrawalForm = styled(WithdrawalForm)`
  padding: 62px 42px 56px;
  background: rgb(251, 251, 251);
  border-radius: 3px;
  margin-bottom: 30px;
`;

const StyledKeeperInfo = styled(KeeperInfo)`
  margin-bottom: 45px;
`;
