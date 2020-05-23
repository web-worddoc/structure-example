import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { paths } from 'core';
import { compose, useStore } from 'lib';
import { TicketItem } from 'features/Support';


export const TicketsList = compose(observer)((props: any) => {
    const { push } = useHistory();
    const {
        Support: { tickets }
    } = useStore();

    return (
        <StyledRoot {...props}>
            {tickets.map(ticket => (
                <StyledLink to={`${paths.office.support.tickets.ticket.pathname}/${ticket.id}`}>
                    <TicketItem
                        key={ticket.id}
                        title={ticket.title}
                        status={ticket.status}
                        fromSupport={false}
                        updatedAt={ticket.updated_at}
                        createdAt={ticket.created_at}
                    />
                </StyledLink>
            ))}
        </StyledRoot>
    )
})

const StyledRoot = styled.div``;

const StyledLink = styled(Link)`
    display: block;
    &:not(:last-of-type) {
        border-bottom: 1px solid rgb(151, 151, 151, .2);
    }
    &:last-of-type {
        padding-bottom: 0;
    }
`;
