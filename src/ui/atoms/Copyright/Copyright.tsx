import * as React from 'react';
import styled from 'styled-components';


export const Copyright = (props: any) => {
    return (
        <StyledRoot {...props}>
            © 2020 OnGrid System, LLC
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    color: #fff;
`;
