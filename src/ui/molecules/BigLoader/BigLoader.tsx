import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';


type Props = {
    amount: number;
    size: number;
    color?: string;
}

export const BigLoader = ({ amount, color, size, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            {(() => {
                let elems = [];

                for (let i = 1; i <= amount; i++) {
                    elems.push(<Bubble key={i} animationDelay={i * 0.1} size={size} color={color} data_testid="circle"/>);
                }
        
                return elems;
            })()}
        </StyledRoot>
    )
}

BigLoader.defaultProps = {
    amount: 10,
    size: 15,
}

const Pulse = keyframes`
    0% { 
        transform: scale3d(1, 1, 1);
    }
    50% {
        transform: scale3d(0.2, 0.2, 0.2); 
        opacity:0.75;
    }
    100%{
        transform: scale3d(1, 1, 1);
    }
`;

const StyledRoot = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Bubble = styled(({ size, color, ...rest }) => (
    <div {...rest}></div>
))`
    width: ${({ size }) => size + 'px'};
    height: ${({ size }) => size + 'px'};
    border-radius: 100px;
    background: var(--color-primary-1);
    animation: ${Pulse} 1.5s infinite ${props => props.animationDelay}s;
    ${({ color }) => color && css`
        background: ${color};
    `}
`;
