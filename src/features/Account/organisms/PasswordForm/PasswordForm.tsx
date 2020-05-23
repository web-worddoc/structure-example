import * as React from 'react';
import styled from 'styled-components';
import { Formik, FormikForm, FormikInput } from 'handy-formik';
import { observer } from 'mobx-react';

import { useStore, compose } from 'lib';
import { InputGroup, Button } from 'ui';


export const PasswordForm = compose(observer)((props: any) => {
    const {
        Account: { changePassword }
    } = useStore();

    const handleSubmit = async ({ oldPassword, newPassword, confirmedPassword }: any, { resetForm }: any) => {
        await changePassword(oldPassword, newPassword, confirmedPassword);
        resetForm({});
    }

    return (
        <Formik
            initialValues={{
                oldPassword: '',
                newPassword: '',
                confirmedPassword: ''
            }}
            onSubmit={handleSubmit}
            render={() => (
                <FormikForm {...props} render={({ names, isSubmitting, ...rest }) => (
                    <>
                        <StyledInputGroups>
                            <FormikInput name={names.oldPassword} render={props => (
                                <InputGroup type="password" label="Old password:" id="oldPassword" {...props}/>
                            )}/>
                            <FormikInput name={names.newPassword} render={props => (
                                <InputGroup type="password" label="New password:" id="newPassword" {...props}/>
                            )}/>
                            <FormikInput name={names.confirmedPassword} render={props => (
                                <InputGroup type="password" label="Confirm password:" id="confirmedPassword" {...props}/>
                            )}/>
                        </StyledInputGroups>
                        <StyledButton isSubmitting={isSubmitting}>Submit</StyledButton>
                    </>
                )}/>
            )}
        />
    )
})

const StyledInputGroups = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-bottom: 30px;
`;

const StyledButton = styled(Button)`
    margin-left: auto;
`;
