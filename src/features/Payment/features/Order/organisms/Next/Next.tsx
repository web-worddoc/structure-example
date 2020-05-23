import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { paths } from 'core';
import { Tip, Button } from 'ui';


export const Next = (props: any) => {
    return (
        <StyledRoot {...props}>
            <StyledTip>
                Great! If you already transfered funds on the account - just press "I already paid!" button. This action will finish your purchase!
            </StyledTip>
            <Link to={paths.office.payment.feedback.pathname}>
                <StyledButton>I ALREADY PAID!</StyledButton>
            </Link>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledTip = styled(Tip)`
    margin-right: 140px;
`;

const StyledButton = styled(Button)`
    width: 250px;
`;
