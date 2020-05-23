import * as React from 'react';
import styled, { css } from 'styled-components';


type Props = {
    stageID: number;
    basePrice: number | string;
    isActive: boolean;
}

export const StageInfo = ({ stageID, basePrice, isActive, ...rest }: Props) => {
    return (
        <StyledRoot {...rest} isActive={isActive}>
            <StyledTitle>({stageID} stage)</StyledTitle>
            Base token price:&nbsp;{basePrice}
        </StyledRoot>
    )
}

StageInfo.defaultProps = {
    isActive: false
}

const StyledRoot = styled(({ isActive, ...rest }) => (
    <div {...rest}></div>
))`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    ${({ isActive }) => isActive && css`
        background: var(--color-primary-1-tint-2);
    `}
`;

const StyledTitle = styled.strong`
    margin-bottom: 3px;
`;
