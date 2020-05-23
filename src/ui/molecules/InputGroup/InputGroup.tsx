import * as React from 'react';
import styled, { css } from 'styled-components';

import { Input, Label } from 'ui';


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
    disabled?: boolean;

    onChange?: (e: React.SyntheticEvent) => void;
}

type InputWrapperProps = {
    hasMark: boolean;
}

export const InputGroup = ({ id, label, className, mark, error, isInvalid, isValid, ...rest}: Props) => {
    return (
        <div className={className}>
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            <InputWrapper hasMark={!!mark}>
                <Input hasMark={!!mark} id={id} {...rest}/>
                {mark && <Mark>{mark}</Mark>}
            </InputWrapper>
        </div>
    )
}

const StyledLabel = styled(Label)`
    margin-bottom: 7px;
    display: block;
`;

const InputWrapper = styled.div<InputWrapperProps>`
    ${({ hasMark }) => hasMark && css`
        position: relative;
    `}
`;

const Mark = styled.div`
    position: absolute;
    top: calc(50% + 3px);
    right: 15px;
    transform: translateY(-50%);
`;
