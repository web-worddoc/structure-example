import * as React from 'react';
import styled from 'styled-components';
import { Formik, FormikForm, FormikInput, FormikFile } from 'handy-formik';
import { observer } from 'mobx-react';

import { useStore, compose } from 'lib';
import { TextareaGroup, Button, FilesList } from 'ui';


export const CreateMessageForm = compose(observer)((props: any) => {
    const {
        Support: { createMessage, selectedTicket }
    } = useStore();

    const handleSubmit = async ({ text, attachments }: any, { resetForm }: any) => {
        if (selectedTicket) {
            await createMessage(selectedTicket.id, {
                text,
                attachments
            });
            resetForm({});
        }
    }

    return (
        <Formik
            initialValues={{
                text: '',
                attachments: []
            }}
            onSubmit={handleSubmit}
            render={() => (
                <FormikForm
                    {...props}
                    className="clearfix"
                    render={({ names, isSubmitting }) => (
                        <>
                            <FormikInput name={names.text} render={props => (
                                <StyledTextareaGroup id="text" label="Describe" {...props}/>
                            )}/>
                            <FormikFile name={names.attachments} multiple accept="image/jpeg, image/png" render={({ files, onDelete, ...rest }) => (
                                <>
                                    {!!files.length && <StyledFilesList files={files} onDelete={onDelete}/>}
                                    <StyledButtons>
                                        <Button type="button" transparent isAttacher {...rest}>Attach</Button>
                                        <StyledButton isAttacher isSubmitting={isSubmitting}>Send</StyledButton>
                                    </StyledButtons>
                                </>
                            )}/>
                        </>
                    )}
                />
            )}
        />
    )
})

const StyledTextareaGroup = styled(TextareaGroup)`
    margin-bottom: 30px;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledFilesList = styled(FilesList)`
    float: left;
`;

const StyledButton = styled(Button)`
    margin-left: 12px;
`;
