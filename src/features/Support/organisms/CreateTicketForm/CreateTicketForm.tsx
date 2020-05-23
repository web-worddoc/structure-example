import * as React from 'react';
import styled from 'styled-components';
import { Formik, FormikForm, FormikInput, FormikFile } from 'handy-formik';
import { useHistory } from 'react-router';

import { paths } from 'core';
import { useStore } from 'lib';
import { InputGroup, TextareaGroup, Button, FilesList } from 'ui';


type Props = {
    onCreate: () => void;
}

export const CreateTicketForm = ({ onCreate, ...rest }: Props) => {
    const {
        Support: { createTicket }
    } = useStore();
    const { push } = useHistory();

    const handleSubmit = async ({ title, text, attachments }: any, { resetForm }: any) => {
        const res = await createTicket({
            title, text, attachments
        });
        resetForm({});
        onCreate();
        push(`${paths.office.support.tickets.ticket.pathname}/${res.body.id}`);
    }

    return (
        <Formik
            initialValues={{
                title: '',
                text: '',
                attachments: []
            }}
            onSubmit={handleSubmit}
            render={() => (
                <FormikForm
                    {...rest}
                    className="clearfix"
                    render={({ names, isSubmitting }) => (
                        <StyledRoot>
                            <FormikInput name={names.title} render={props => (
                                <StyledInputGroup id="title" label="Subject" {...props}/>
                            )}/>
                            <FormikInput name={names.text} render={props => (
                                <StyledTextareaGroup id="text" label="Detailed description" {...props}/>
                            )} />
                            <FormikFile name={names.attachments} multiple accept="image/jpeg, image/png" render={({ files, onDelete, ...rest }) => (
                                <>
                                    {!!files.length && <StyledFilesList files={files} onDelete={onDelete}/>}
                                    <StyledButtons>
                                        <StyledButton type="button" transparent isAttacher {...rest}>Attach</StyledButton>
                                        <StyledButton isSubmitting={isSubmitting} className="n2">Send</StyledButton>
                                    </StyledButtons>
                                </>
                            )}/>
                        </StyledRoot>
                    )}
                />
            )}
        />
    )
}

const StyledRoot = styled.div``;

const StyledInputGroup = styled(InputGroup)`
    margin-bottom: 40px;
`;

const StyledTextareaGroup = styled(TextareaGroup)`
    margin-bottom: 30px;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledButton = styled(Button)`
    width: 185px;
    &.n2 {
        margin-left: 24px;
    }
`;

const StyledFilesList = styled(FilesList)`
    float: left;
`;
