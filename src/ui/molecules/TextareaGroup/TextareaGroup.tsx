import * as React from 'react';
import styled from 'styled-components';

import { Textarea, Label } from 'ui';


type Props = {
    id: string;
    label: React.ReactNode;
    value?: string | number;
    className?: string;
    mark?: React.ReactNode;
    error?: React.ReactNode;
    isInvalid?: boolean | null;
    isValid?: boolean | null;
    type?: string;

    onChange?: (e: React.SyntheticEvent) => void;
}

export const TextareaGroup = ({ className, id, label, ...rest }: Props) => {
    return (
        <div className={className}>
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            <Textarea id={id} {...rest}/>
        </div>
    )
}

const StyledLabel = styled(Label)`
    margin-bottom: 7px;
    display: block;
`;
