import React from 'react';
import styled from 'styled-components';

import { Section1 } from 'ui';
import { TicketsList } from 'features/Support';


export const TicketsPage = () => {
  return (
      <Section1>
        <TicketsList/>
      </Section1>
    );
};
