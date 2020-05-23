import React from 'react';
import styled from 'styled-components';

import { FullLogo, Tagline } from 'ui';


export const Header = (props: any) => {
    return (
        <StyledRoot {...props}>
            <StyledLogo />
            <Tagline>
                Интегратор blockchain-приложений<br/>и криптовалютных сервисов
            </Tagline>
        </StyledRoot>
    )
};

const StyledRoot = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLogo = styled(FullLogo)`
    margin-right: 20px;
    padding: 10px 20px 10px 0;
    border-right: 1px solid rgb(255,255,255,.3);
`;
