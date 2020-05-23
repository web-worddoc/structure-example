import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { paths } from 'core';
import { Button } from 'ui';


type Props = {
    onAgain: () => void;
}

export const FailureFeedback = ({ onAgain, ...rest }: Props) => {
    return (
        <div {...rest}>
            <Desc>
                We were una find your email 'ivanov@gmin RSWSystems investors
            </Desc>
            <StyledLink to={paths.auth.login.pathname}>
                <Button maxWidth>OK, GOT IT!</Button>
            </StyledLink>
            <Button maxWidth transparent onClick={onAgain}>TRY AGAIN</Button>
        </div>
    )
}

const Desc = styled.p`
    margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
    display: block;
    margin-bottom: 10px;
`;
