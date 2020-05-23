import * as React from 'react';
import styled from 'styled-components';


type Props = {
    children: React.ReactNode;
    header: React.ReactNode;
    footer: React.ReactNode;
}

export const OfficeTemplate = ({ children, header, footer }: Props) => {
    return (
        <StyledRoot>
            <StyledHeader>{header}</StyledHeader>
            <StyledContent>{children}</StyledContent>
            <StyledFooter>{footer}</StyledFooter>
        </StyledRoot>
    );
};

const StyledRoot = styled.div`
    width: 100%;
    min-height: 100vh;
    background: rgb(245, 245, 250);
    display: grid;
    grid-template: 
        'header header header' 90px
        'content content content' 1fr
        'footer footer footer' 140px
        / 1fr minmax(min-content, 1780px) 1fr;
`;

const StyledHeader = styled.div`
    grid-area: header;
`;

const StyledContent = styled.div`
    margin: 57px 125px 40px;
    grid-area: content;
`;

const StyledFooter = styled.div`
    grid-area: footer;
`;
