import * as React from 'react';
import styled from 'styled-components';

import { Button } from 'ui';


type Props = {
    onAgain: (value: null) => void;
}

export const RequestFailureFeedback = ({ onAgain, ...rest }: Props) => {
    return (
        <div {...rest}>
            <Desc>
                NOPE!
            </Desc>
            <Button maxWidth onClick={() => onAgain(null)}>TRY AGAIN!</Button>
        </div>
    )
}

const Desc = styled.p`
    margin-bottom: 20px;
`;
