import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { FormikForm, FormikInput } from 'handy-formik';

import { USD, MIN_INVEST, MAX_INVEST } from 'core';
import { useStore, compose } from 'lib';
import { InputGroup } from 'ui'
import { Rate } from 'features/Payment/features/Calculation';


export const CalculatorForm = compose(observer)((props: any) => {
    const {
        Currency: {
            selected: selectedCurrency,
            rate
        },
        Calculation: {
            setInvestedCrypto,
            setInvestedFiat,
        }
    } = useStore();

    const handleChangeCrypto = (e: any) => {
        if (!isNaN(e.target.value)) {
            setInvestedCrypto(Number(e.target.value));
        }
    }
    
    const handleChangeFiat = (e: any) => {
        if (!isNaN(e.target.value)) {
            setInvestedFiat(Number(e.target.value));
        }
    }

    return (
        <StyledFormikForm {...props} render={({ names }: any) => (
            <>
                <FormikInput name={names.cryptoAmount} render={props => (
                    <StyledInputGroup
                        className="n1"
                        id="amount"
                        mark={selectedCurrency?.code}
                        label="Amount"
                        {...props}
                        onChange={handleChangeCrypto}
                    />
                )} />
                <FormikInput name={names.fiatAmount} render={props => (
                    <StyledInputGroup
                        className="n2"
                        id="conversion"
                        mark={USD}
                        label={
                            <StyledCustomLabel>
                                <span>Conversion</span>
                                <span>Min {MIN_INVEST}$ - Max {MAX_INVEST}$</span>
                            </StyledCustomLabel>
                        }
                        {...props}
                        onChange={handleChangeFiat}
                    />
                )} />
                {selectedCurrency && rate && <StyledRate>1 {selectedCurrency.code} = {+rate.toFixed(2)} $</StyledRate>}
            </>
        )}/>
    )
})

const StyledFormikForm = styled(FormikForm)`
    display: flex;
`;

const StyledInputGroup = styled(InputGroup)`
    flex: 1;
    &.n1 {
        margin-right: 30px;
    }
    &.n2 {
        margin-right: 95px;
    }
`;

const StyledCustomLabel = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledRate = styled(Rate)`
    margin-right: 50px;
`;
