import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { paths } from 'core';
import { Block, Head } from 'features/Auth';
import { LoginForm } from 'features/Auth/features/Login';


export const LoginPage = () => {
    return (
        <Block>
            <Head centered>Authorization</Head>
            <LoginForm />
            <StyledRegText>Existing RSWSystems user?<br /><Link to={paths.auth.register.pathname}>Sign Up</Link> and get your SWG token.</StyledRegText>
        </Block>
    );
};

const StyledRegText = styled.p`
    text-align: center;
`;
