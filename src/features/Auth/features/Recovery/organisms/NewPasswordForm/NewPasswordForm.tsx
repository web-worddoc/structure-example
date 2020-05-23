import * as React from 'react';
import styled from 'styled-components';
import { Formik, FormikForm, FormikInput } from 'handy-formik';

import { useStore } from 'lib';
import { InputGroup, Button } from 'ui';


export const NewPasswordForm = (props: any) => {
    const {
        Auth: { setNewPassword }
    } = useStore();

    const handleSubmit = React.useCallback(async ({ password, confirm }: any) => {
        await setNewPassword(password, confirm, '', '');
    }, []);
    const initialValues = React.useMemo(() => ({
        password: '',
        confirm: ''
    }), [])

    return (
        <Formik {...props}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={() => (
                <FormikForm
                    render={({ names, isSubmitting }) => (
                        <>
                            <FormikInput name={names.password} render={props => (
                                <StyledInputGroup id="email" type="password" label="New password" {...props}/>
                            )}/>
                            <FormikInput name={names.confirm} render={props => (
                                <StyledInputGroup id="email" type="password" label="Confirm new password" {...props}/>
                            )}/>
                            <Button maxWidth isSubmitting={isSubmitting}>RESET PASSWORD</Button>
                        </>
                    )}
                />
            )}
        />
    )
}

const StyledInputGroup = styled(InputGroup)`
    margin-bottom: 30px;
`;
