import * as React from 'react';
import styled from 'styled-components';
import { Formik, FormikForm, FormikInput } from 'handy-formik';
import { withRouter } from 'react-router';

import { useStore, compose } from 'lib';
import { InputGroup, Button } from 'ui';


type Props = {
    location: any;
}

export const CompleteRegistryForm = compose(withRouter)(({ location, ...rest }: Props) => {
    const {
        Account: { fetch: fetchUser },
        Session: { start }
    } = useStore();
    const token = location.search.split('=')[1];
    if (token) {
        start(token);
    }

    const {
        Auth: { completeRegistry }
    } = useStore();

    const handleSubmit = React.useCallback(async ({ password }: any) => {
        await completeRegistry(password, 'en');
        await fetchUser();
    }, []);

    const initialValues = React.useMemo(() => ({
        password: '',
        confirm: '',
    }), []);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={() => (
                <FormikForm {...rest} render={({ names, isSubmitting }: any) => (
                    <>
                        <FormikInput name={names.password} render={props => (
                            <StyledInputGroup type="password" id="email" label="New password" {...props}/>
                        )} />
                        <FormikInput name={names.confirm} render={props => (
                            <StyledInputGroup type="password" id="email" label="Confirm new password" {...props}/>
                        )}/>
                        <Button isSubmitting={isSubmitting} maxWidth>RESET PASSWORD</Button>
                    </>
                )}/>
            )}
        />
    )
})

const StyledInputGroup = styled(InputGroup)`
    margin-bottom: 30px;
`;
