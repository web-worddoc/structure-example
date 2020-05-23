import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { useStore, compose }from 'lib';
import { Section1, Head2, Tip, Button } from 'ui';
import { ReactComponent as IconMetamask } from 'features/Keeper/assets/icon_metamask.svg';


export const NotUnlocked = compose(observer)((props: any) => {
    return (
        <Section1 {...props}>
            <Head2 centered>You are not authorized in Metamask</Head2>
            <StyledInfo>
                We need you to authorized in Metamask in order to able to proceed to Keeper Dapp
            </StyledInfo>
            <StyledInstruction>
                <StyledIconMetamask/>
                <Button isDisabled>Go to Keeper</Button>
            </StyledInstruction>
            <Tip>
                You can check your balance and withfraw unfrozen tokens anytime from either your Keeper DApp page or&nbsp;
                <a href="" className="styled">Etherscan Read/Write</a>
            </Tip>
        </Section1>
    )
})

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
