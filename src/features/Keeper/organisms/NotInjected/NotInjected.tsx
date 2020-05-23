import * as React from 'react';
import styled from 'styled-components';

import { Section1, Head2, Tip, Button } from 'ui';
import { ReactComponent as IconMetamask } from 'features/Keeper/assets/icon_metamask.svg';


export const NotInjected = (props: any) => {
    return (
        <Section1 {...props}>
            <Head2 centered>Metamask has not been detected</Head2>
            <StyledInfo>
                You do not have Metamask plugin in order to proceed to Keeper Dapp.<br />
                Please, install it via link below
            </StyledInfo>
            <StyledInstruction>
                <StyledIconMetamask/>
                <a href="https://metamask.io/" target="_blank">
                    <Button>Install Metamask</Button>
                </a>
            </StyledInstruction>
            <Tip>
                You can check your balance and withfraw unfrozen tokens anytime from either your Keeper DApp page or&nbsp;
                <a href="" className="styled">Etherscan Read/Write</a>
            </Tip>
        </Section1>
    )
}

const StyledInfo = styled.div`
    text-align: center;
    margin-bottom: 54px;
`

const StyledInstruction = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 42px 42px;
    background: rgb(251, 251, 251);
    margin-bottom: 30px;
`;

const StyledIconMetamask = styled(IconMetamask)`
    margin-bottom: 20px;
`;
