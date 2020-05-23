import styled, { css } from 'styled-components';


type Props = {
    bold?: boolean;
    centered?: boolean;
}

export const Head1 = styled.h1<Props>`
    ${({ bold }) => bold && css`
        font-weight: 600;
    `}
    ${({ centered }) => centered && css`
        display: flex;
        justify-content: center;
    `}
`;

export const Head2 = styled.h2<Props>`
    ${({ bold }) => bold && css`
        font-weight: 600;
    `}
    ${({ centered }) => centered && css`
        display: flex;
        justify-content: center;
    `}
`;

export const Head3 = styled.h3<Props>`
    ${({ bold }) => bold && css`
        font-weight: 600;
    `}
    ${({ centered }) => centered && css`
        display: flex;
        justify-content: center;
    `}
`;

export const Head4 = styled.h4<Props>`
    ${({ bold }) => bold && css`
        font-weight: 600;
    `}
    ${({ centered }) => centered && css`
        display: flex;
        justify-content: center;
    `}
`;

export const Head5 = styled.h5<Props>`
    ${({ bold }) => bold && css`
        font-weight: 600;
    `}
    ${({ centered }) => centered && css`
        display: flex;
        justify-content: center;
    `}
`;

export const Head6 = styled.h5<Props>`
    ${({ bold }) => bold && css`
        font-weight: 600;
    `}
    ${({ centered }) => centered && css`
        display: flex;
        justify-content: center;
    `}
`;
