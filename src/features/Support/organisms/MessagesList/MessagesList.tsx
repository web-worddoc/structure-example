import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { useStore, compose } from 'lib';
import { Message } from './../Message';


export const MessagesList = compose(observer)((props: any) => {
    const {
        Support: { selectedTicket }
    } = useStore();

    return (
        <StyledRoot {...props}>
            {selectedTicket &&
                <>
                    {selectedTicket.messages.map(el => (
                        <StyledMessage key={el.id} fromSupport={el.from_support} text={el.text} attachments={el.attachments} createdAt={el.created_at}/>
                    ))}
                </>
            }
        </StyledRoot>
    )
})

const StyledRoot = styled.div``;

const StyledMessage = styled(Message)`
    &:not(:last-of-type) {
        margin-bottom: 50px;
        border-bottom: 1px solid rgb(151, 151, 151, .2);
    }
`;
