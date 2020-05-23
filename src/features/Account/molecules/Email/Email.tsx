import * as React from 'react';
import styled from 'styled-components';

type Props = {
    address: string | null;
}

export const Email = ({ address, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            <StyledTitle>Your email:</StyledTitle>
            {address && <strong>{address}</strong>}
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    padding: 10px 19px;
`;

const StyledTitle = styled.div`
    color: rgb(31, 31, 31, .5);
`;
