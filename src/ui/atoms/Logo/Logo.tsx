import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from 'ui/assets/logo.svg';


export const Logo = (props: any) => (
    <StyledRoot {...props}>
        <LogoIcon/>
    </StyledRoot>
)

const StyledRoot = styled.div`
    width: 86px;
    min-width: 86px;
    height: 100%;
    border-right: 1px solid rgb(208, 215, 231);
    display: flex;
    align-items: center;
    justify-content: center;
`;
