import * as React from 'react';
import styled from 'styled-components';


type Props = {
    children: any;
}

export const Tagline = ({children, ...rest}: Props) => {
    return (
        <StyledRoot {...rest}>
            {children}
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    width: max-content;
    font-size: 14px;
    color: #fff;
`;
