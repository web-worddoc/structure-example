import * as React from 'react';
import styled from 'styled-components';

import { Section1, Head2, Tip } from 'ui';
import { ReactComponent as IconNotSupported } from 'features/Keeper/assets/icon_not_supported.svg';


export const NotSupported = (props: any) => {
    return (
        <Section1 {...props}>
            <StyledHead2 centered>Unable to use Keeper</StyledHead2>
            <StyledInfo>Please, check if your browser supports interaction with ethereum</StyledInfo>
            <StyledGraphics>
                <IconNotSupported/>
            </StyledGraphics>
            <Tip hasOffset>
                This browser does not support Metamask, please go to another browser from the suggested ones:&nbsp;
                <a target="_blank" rel="noopener noreferrer" className="styled" href="https://www.google.com/chrome/">Chrome</a>,&nbsp;
                <a target="_blank" rel="noopener noreferrer" className="styled" href="https://www.mozilla.org/ru/firefox/new/">Firefox</a>,&nbsp;
                <a target="_blank" rel="noopener noreferrer" className="styled" href="https://brave.com/">Brave Browsers</a>
            </Tip>
        </Section1>
    )
}

const StyledHead2 = styled(Head2)`
    margin-bottom: 20px;
`;

const StyledInfo = styled.div`
    margin-bottom: 54px;
    font-weight: 400;
    text-align: center;
`;

const StyledGraphics = styled.div`
    display: flex;
    justify-content: center;
    padding: 42px 42px;
    background: rgb(251, 251, 251);
    margin-bottom: 30px;
`;
