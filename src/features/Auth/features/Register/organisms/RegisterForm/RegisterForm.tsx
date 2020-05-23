import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik, FormikForm, FormikInput } from 'handy-formik';

import { useStore } from 'lib';
import { paths } from 'core';
import { InputGroup, Button } from 'ui';


type Props = {
    setRegisterStatus: (value: boolean) => void;
}

export const RegisterForm = React.memo(({ setRegisterStatus, ...rest }: Props) => {
    const {
        Auth: { register }
    } = useStore();

    const handleSubmit = React.useCallback(async ({ email }: any, { resetForm }: any) => {
        try {
            await register(email, 'enfff');
            setRegisterStatus(true)
        } catch (err) {
            resetForm({});
            setRegisterStatus(false)
        }
    }, []);

    const initialValues = React.useMemo(() => ({
        email: ''
    }), []);

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            render={() => (
                <FormikForm
                    {...rest}
                    render={({ names, isSubmitting }) => (
                        <>
                            <FormikInput name={names.email} render={(props: any) => (
                                <StyledInputGroup id="email" label="Your email at RSW­Systems:" {...props} />
                            )} />
                            <StyledButton maxWidth isSubmitting={isSubmitting}>SIGN UP & GET TOKENS</StyledButton>
                            <Link to={paths.auth.login.pathname}>
                                <StyledButton transparent maxWidth>
                                    BACK TO LOG IN
                                </StyledButton>
                            </Link>
                        </>
                    )}
                />
            )}
        />
    )
})

const StyledInputGroup = styled(InputGroup)`
    margin-bottom: 30px;
`;

const StyledButton = styled(Button)`
    &:first-of-type:not(:only-child) {
        margin-bottom: 10px;
    }
`;
