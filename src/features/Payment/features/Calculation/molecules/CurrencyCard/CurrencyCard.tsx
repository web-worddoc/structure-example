import * as React from 'react';
import styled, { css } from 'styled-components';


type Props = {
    name: string;
    code: string;
    icon: React.ReactNode;
    isActive: boolean;
    isDisabled: boolean;

    onClick: () => void;
}

type RootProps = {
    isActive: boolean;

    onClick: () => void;
}

type NameProps = {
    isActive: boolean;
}

export const CurrencyCard = ({ name, icon, isActive, onClick, ...rest }: Props) => {
    return (
        <StyledRoot {...rest} isActive={isActive} onClick={onClick}>
            <StyledIcon>{icon}</StyledIcon>
            <StyledName isActive={isActive}>{name}</StyledName>
        </StyledRoot>
    )
}

const StyledRoot = styled.div<RootProps>`
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(228, 232, 234, 0.25);
    background-color: rgb(255, 255, 255);
    padding-top: 85%;
    position: relative;
    cursor: pointer;
    ${({ isActive }) => isActive && css`
        box-shadow: 0 6px 25px 0 rgba(40, 103, 239, 0.15);
    `}
`;

const StyledIcon = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
`;

const StyledName = styled.div<NameProps>`
    position: absolute;
    bottom: 13%;
    left: 50%;
    transform: translateX(-50%);
    ${({ isActive }) => isActive && css`
        color: var(--color-primary-1);
    `}
`;
