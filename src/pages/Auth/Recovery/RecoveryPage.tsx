import React from 'react';
import styled from 'styled-components';

import { Block, Head } from 'features/Auth';
import { RecoveryForm, RequestFailureFeedback, RequestSuccessFeedback } from 'features/Auth/features/Recovery';


export const RecoveryPage = () => {
    let [recoveryStatus, setRecoveryStatus] = React.useState<boolean | null>(null);

    return (
        <Block>
            {recoveryStatus === true &&
                <>
                    <Head centered divided>Success</Head>
                    <RequestSuccessFeedback/>
                </>
            }
            {recoveryStatus === false &&
                <>
                    <Head centered divided>Failure</Head>
                    <RequestFailureFeedback onAgain={setRecoveryStatus}/>    
                </>
            }
            {recoveryStatus === null &&
                <>
                    <Head centered divided>Recovery</Head>
                    <StyledDesc>Восстановить пароль несложно.Просто скажите нам email, который Вы регистрировали.</StyledDesc>
                    <RecoveryForm setRecoveryStatus={setRecoveryStatus}/>    
                </>
            }
        </Block>
    );
};

const StyledDesc = styled.p`
    margin-bottom: 30px;
`;
