import * as React from 'react';

import { Block, Head } from 'features/Auth';
import { CompleteRegistryForm } from 'features/Auth/features/Register';


export const CompleteRegistryPage = () => {
    return (
        <Block>
            <Head centered>Complete registration</Head>
            <CompleteRegistryForm/>
        </Block>
    );
};

