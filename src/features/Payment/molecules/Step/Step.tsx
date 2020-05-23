import * as React from 'react';
import styled, { css } from 'styled-components';


type Props = {
    title: React.ReactNode;
    desc: React.ReactNode;
    isActive: boolean;
}

type PointerProps = {
    isActive: boolean;
}

export const Step = ({ title, desc, isActive, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            <StyledTitle>{title}</StyledTitle>        
            <StyledDesc>{desc}</StyledDesc>
            <Pointer isActive={isActive}/>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    width: 60px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

const StyledTitle = styled.div`
    text-align: center;
    color: var(--color-primary-1);
    font-size: 20px;
    width: 190px;
    white-space: nowrap;
    margin-bottom: 3px;
`;

const StyledDesc = styled.div`    
    text-align: center;
    margin-bottom: 25px;
    white-space: nowrap;
`;

const Pointer = styled.div<PointerProps>`
    &:after {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background: rgba(0, 0, 0, .3);
        border: 2px solid white;
        box-shadow: 0 0 0 12px rgba(0, 0, 0, .02);
        border-radius: 100%;
        margin: 0 auto;
        z-index: 2;
        position: relative;
        ${({ isActive }) => isActive && css`
            background: var(--color-primary-1);
            box-shadow: 0 0 0 12px rgb(40, 103, 239, .07);
        `}
    }
`;
