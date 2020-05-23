import React from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router';
import { observer } from 'mobx-react';

import { paths } from 'core';
import { useStore, compose } from 'lib';
import { Section1 } from 'ui';
import { TicketHeader, MessagesList, CreateMessageForm } from 'features/Support';


export const TicketPage = compose(observer)(() => {
  const { id } = useParams();
  const { push } = useHistory();
  const {
    Support: { fetch, selectedTicket, unselectTicket }
  } = useStore();

  React.useEffect(() => {
    fetch(Number(id)).catch(() => {
      push(paths.office.support.tickets.pathname);
    })
    return () => {
      unselectTicket();
    }
  }, []);

  return (
      <Section1>
        {selectedTicket && 
          <>
            <StyledTicketHeader title={selectedTicket.title} status={selectedTicket.status} />
            <StyledMessagesList />
            <CreateMessageForm/>
          </>
        }
      </Section1>
    );
});

const StyledTicketHeader = styled(TicketHeader)`
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(151, 151, 151, .2);
  margin-bottom: 32px;
`;

const StyledMessagesList = styled(MessagesList)`
  margin-bottom: 40px;
`;
