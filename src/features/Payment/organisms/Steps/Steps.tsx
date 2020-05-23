import * as React from 'react';
import styled from 'styled-components';

import { Step } from 'features/Payment';


type Step = {
    title: React.ReactNode;
    desc: React.ReactNode;
}

const STEPS_MAP: Step[] = [
    {
        title: 'Step 1',
        desc: 'Select payment method'
    }, {
        title: 'Step 2',
        desc: 'Buying tokens'
    }, {
        title: 'Step 3',
        desc: 'Transaction mining'
    }
]

export const Steps = (props: any) => {
    return (
        <StyledRoot {...props}>
            {STEPS_MAP.map((step: Step, i: number) => (
                <React.Fragment key={i}>
                    <Step title={step.title} desc={step.desc} isActive={true}/>
                    {i !== STEPS_MAP.length - 1 && <Divider/>}
                </React.Fragment>
            ))}
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    display: flex;
    align-items: flex-end;
    max-width: 860px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 12px;
`;

const Divider = styled.div`
    height: 2px;
    background: var(--color-disabled);
    flex: 2;
    position: relative;
    top: -9px;
`;
