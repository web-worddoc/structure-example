import styled, { css } from 'styled-components';


type Props = {
    invalid?: boolean;
    isActive?: boolean;
    hasMark?: boolean;
    value?: string | number;
    disabled?: boolean;
}

export const Input = styled.input<Props>`
    display: block;
    width: 100%;
    height: 52px;
    padding: 2px 16px 0;
    border-radius: 3px;
    background: white;
    border: solid 1px rgb(151, 151, 151, .31);
    ${({ hasMark }) => hasMark && css`
        padding-right: 70px;
    `}
    ${({ invalid }) => invalid && css`
        
    `}
    ${({ isActive }) => isActive && css`

    `}
`;
