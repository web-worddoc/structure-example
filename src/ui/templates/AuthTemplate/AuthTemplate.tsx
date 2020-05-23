import * as React from 'react';
import styled from 'styled-components';

import bg from './../../assets/auth_bg.png';


type Props = {
    children: any,
    header: any,
    footer?: any,
}

export const AuthTemplate = ({ children, header, footer, }: Props) => {
    return (
        <StyledRoot>
            <Header>{header}</Header>
            <Content>{children}</Content>
            <Footer>{footer}</Footer>
        </StyledRoot>
    )
};

const StyledRoot = styled.div`
    min-height: 100vh;
    width: 100%;
    background: url(${bg}) no-repeat center, radial-gradient(circle at 65% 68%, #29459d, #0e297b 56%, #17317b 111%);
    background-size: 100% auto;
    padding: 40px 77px 30px;
    display: grid;
    grid-template:
        'header header header' 50px
        '. content .' 1fr
        'footer footer footer' 30px
        / 1fr minmax(min-content, 1780px) 1fr;
    grid-row-gap: 50px;
`;

const Header = styled.div`
    grid-area: header;
`;

const Content = styled.div`
    grid-area: content;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = styled.div`
    grid-area: footer;
`;
