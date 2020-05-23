import * as React from 'react';

import { Block, Head } from 'features/Auth';
import { NewPasswordForm } from 'features/Auth/features/Recovery';


export const NewPasswordPage = () => {
    return (
        <Block>
            <Head centered>Recovery</Head>
            <NewPasswordForm/>
        </Block>
    );
};

