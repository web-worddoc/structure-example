import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { Formik, FormikForm, FormikInput } from 'handy-formik';

import { useStore, compose } from 'lib';
import { InputGroup, Button } from 'ui';


export const EthForm = compose(observer)((props: any) => {
    const {
        Account: { setEthAddress },
        Web3: { selectedAddress }
    } = useStore();

    const handleSubmit = async ({ ethAddress }: any) => {
        await setEthAddress(ethAddress);
    }

    const initialValues = React.useMemo(() => ({
        ethAddress: selectedAddress || '',
    }), [selectedAddress]);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={() => (
                <StyledFormikForm
                    {...props}
                    render={({ names, isSubmitting }: any) => (
                        <>
                            <FormikInput name={names.ethAddress} render={props => (
                                <StyledInputGroup id="ethAddress" label="Your Ethereum wallet address" {...props}/>
                            )}/>
                            <Button isSubmitting={isSubmitting}>SUBMIT</Button>
                        </>
                    )}
                />
            )}
        />
    )
})

const StyledFormikForm = styled(FormikForm)`
    background: rgb(251, 251, 251);
    border-radius: 3px;
    padding: 50px 40px 60px;
    display: flex;
    align-items: flex-end;
`;

const StyledInputGroup = styled(InputGroup)`
    flex: 1;
    margin-right: 20px;
`;
