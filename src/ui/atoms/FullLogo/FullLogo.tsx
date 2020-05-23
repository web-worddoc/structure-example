import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from './../../assets/logo_full.svg';


export const FullLogo = (props: any) => (
    <StyledRoot {...props}>
        <LogoIcon/>
    </StyledRoot>
);

const StyledRoot = styled.div`
    display: flex;
    align-items: center;
`;
