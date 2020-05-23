import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik, FormikForm, FormikInput } from 'handy-formik';

import { paths } from 'core';
import { InputGroup, Button } from 'ui';
import { useStore } from 'lib';


export const LoginForm = React.memo(() => {
    const {
        Auth: { login },
        Account: { fetch: fetchUser }
    } = useStore();

    const handleSubmit = React.useCallback(async ({ email, password }: any) => {
        await login(email, password);
        await fetchUser();
    }, []);

    const initialValues = React.useMemo(() => ({
        email: 'test@gmail.com',
        password: 'Devilfraer1120'
    }), []);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={() => (
                <FormikForm
                    render={({ names, isSubmitting }) => (
                        <>
                            <FormikInput name={names.email} render={props => (
                                <StyledInputGroup id="email" label="Email" {...props}/>
                            )} />
                            <FormikInput name={names.password} render={props => (
                                <StyledInputGroup type="password" id="password" label="Password" {...props}/>
                            )}/>
                            <Forgot to={paths.auth.recovery.pathname}>Forgot password?</Forgot>
                            <StyledButton maxWidth isSubmitting={isSubmitting}>SIGN IN</StyledButton>
                        </>
                    )}
                />
            )}
        />
    )
});

const StyledInputGroup = styled(InputGroup)`
    margin-bottom: 10px;
`;

const Forgot = styled(Link)`
    float: right;
    margin-bottom: 30px;
    cursor: pointer;
    color: currentColor;
    text-decoration: none;
`;

const StyledButton = styled(Button)`
    margin-bottom: 25px;
`;
