import * as React from 'react';
import styled from 'styled-components';

import { Head } from 'features/Payment/features/Calculation';
import { CalculatorForm } from './../CalculatorForm';


export const Calculator = (props: any) => {
    return (
        <StyledRoot {...props}>
            <StyledHead>Calculator</StyledHead>
            <CalculatorForm />
        </StyledRoot>
    )
}

const StyledRoot = styled.div``;

const StyledHead = styled(Head)`
    margin-bottom: 16px;
`;
