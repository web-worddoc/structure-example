import React from 'react';
import styled from 'styled-components';

import { Head1 } from 'ui';
import { TxnTable } from 'features/Transactions';


export const TransactionsPage = () => {
  return (
      <>
        <Head1>Transactions</Head1>  
        <TxnTable/>
      </>
    );
};
