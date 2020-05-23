import styled from 'styled-components';


type Props = {
    htmlFor?: string;
}

export const Label = styled.label<Props>`
    font-weight: 400;
    white-space: nowrap;
`;
