import React from 'react';
import styled from 'styled-components';
import { Formik } from 'handy-formik';
import { observer } from 'mobx-react';

import { useStore, compose } from 'lib';
import { Section1 } from 'ui';
import { Currencies, Calculator, Details, Total } from 'features/Payment/features/Calculation';


export const CalculationPage = compose(observer)(() => {
  const {
    Calculation: { investedCrypto, investedFiat },
    Currency: { all: currencies, selected: selectedCrypto, rate },
    Order: { create: createOrder }
  } = useStore();

  const handleSubmit = async ({ cryptoAmount, fiatAmount }: any) => {
    if (selectedCrypto) {
      await createOrder({
        code: selectedCrypto.code,
        amount: cryptoAmount,
        usdAmount: fiatAmount
      });
    }
  }

  return (
    <Formik
      initialValues={{
        cryptoAmount: investedCrypto,
        fiatAmount: investedFiat
      }}
      onSubmit={handleSubmit}
      render={() => (
        <Section1>
          {!!currencies.length && <StyledCurrencies />}
          {!!rate &&
            <>
              <StyledCalculator/>
              <StyledDetails/>
              <Total/>
            </>
          }
        </Section1>
      )}
    />
  )
})



const StyledCalculator = styled(Calculator)`
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgb(151, 151, 151, .2);
`;

const StyledCurrencies = styled(Currencies)`
  border-bottom: 1px solid rgb(151, 151, 151, .2);
  padding-bottom: 40px;
  margin-bottom: 50px;
`;

const StyledDetails = styled(Details)`
  margin-bottom: 34px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgb(151, 151, 151, .2);
`;
