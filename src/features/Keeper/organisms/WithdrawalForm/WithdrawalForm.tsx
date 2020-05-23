import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { Formik, FormikForm, FormikInput } from 'handy-formik';

import { InputGroup, Button } from 'ui';
import { useStore, compose } from 'lib';


export const WithdrawalForm = compose(observer)((props: any) => {
    const {
        Keeper: { withdraw, unfrozenBalance },
        Web3: { selectedAddress }
    } = useStore();

    const handleSubmit = async ({ recipient, amount }: any, { resetForm }: any) => {
        await withdraw(recipient, Number(amount));
    }

    return (
        <Formik
            initialValues={{
                recipient: selectedAddress || '',
                amount: typeof unfrozenBalance === 'number' ? unfrozenBalance : ''
            }}
            onSubmit={handleSubmit}
            render={() => (
                <StyledFormikForm {...props} render={({ names, isSubmitting }: any) => (
                    <>
                        <StyledInputsWrapper>
                            <FormikInput name={names.recipient} render={props => (
                                <StyledInputGroup id="recipient" label="You ETH wallet" {...props}/>
                            )}/>
                            <FormikInput name={names.amount} render={props => (
                                <InputGroup id="amount" label="Available tokens to withdraw" {...props}/>
                            )}/>
                        </StyledInputsWrapper>
                        <StyledButtonWrapper>
                            <Button isSubmitting={isSubmitting}>SUBMIT</Button>
                        </StyledButtonWrapper>
                    </>
                )}/>
            )}
        />
    )
})

const StyledFormikForm = styled(FormikForm)`
    display: flex;
    align-content: stretch;
`;

const StyledInputsWrapper = styled.div`
    flex: 1;
    margin-right: 20px;
`;

const StyledInputGroup = styled(InputGroup)`
    margin-bottom: 30px;
`;

const StyledButtonWrapper = styled.div`
    width: 250px;
    display: inline-flex;
    align-items: flex-end;
`;
