import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { paths } from 'core';
import { Button } from 'ui';


type Props = {

}

export const RequestSuccessFeedback = ({...rest}: Props) => {
    return (
        <div {...rest}>
            <Desc>
                Perfect! We have sent an email 
                with a confirmation link to your 
                email address. In order to complete 
                the sign-up process, please click 
                the confirmation link. 
                If you do not receive 
                a confirmation email, 
                please check your spam folder.
            </Desc>
            <Link to={paths.auth.login.pathname}>
                <Button maxWidth>OK, GOT IT!</Button>
            </Link>
        </div>
    )
}

const Desc = styled.p`
    margin-bottom: 20px;
`;
