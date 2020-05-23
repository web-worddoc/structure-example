import * as React from 'react';
import styled from 'styled-components';

import { Block, Head } from 'features/Auth';
import { RegisterForm, SuccessFeedback, FailureFeedback } from 'features/Auth/features/Register';


export const RegisterPage = () => {
    let [registerStatus, setRegisterStatus] = React.useState<boolean | null>(null);

    return (
        <Block>
            {registerStatus === true &&
                <>
                    <Head centered divided>Success</Head>
                    <SuccessFeedback/>
                </>
            }
            {registerStatus === false &&
                <>
                    <Head centered divided>Failure</Head>
                    <FailureFeedback onAgain={() => setRegisterStatus(null)}/>    
                </>
            }
            {registerStatus === null &&
                <>
                    <Head centered divided>Register</Head>
                    <StyledDesc>At the moment we are paying out SWG tokens for existing RSW­Systems investors who signed shares to Tokens Swap Agreement.</StyledDesc>
                    <RegisterForm setRegisterStatus={setRegisterStatus}/>    
                </>
            }
        </Block>
    );
};

const StyledDesc = styled.p`
    margin-bottom: 30px;
`;
