import styled, { css } from 'styled-components';

type Props = {
    hasOffset?: boolean;
}

export const Tip = styled.div<Props>`
    border-left: 3px solid var(--color-primary-1);
    padding-left: 10px;
    display: flex;
    align-items: center;
    ${({ hasOffset }) => hasOffset && css`
        margin-left: 40px;
    `}
`;
