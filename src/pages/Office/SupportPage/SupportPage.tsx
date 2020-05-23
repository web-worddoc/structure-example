import React from 'react';
import styled from 'styled-components';

import { MD_MAX_CONTENT_WIDTH } from 'core';
import { Routes } from 'lib';
import { Modal, Head1, TextButton } from 'ui';
import { CreateTicketForm } from 'features/Support';


export const SupportPage = ({ route }: any) => {
  const [modalOpened, toggleModal] = React.useState<boolean>(false);

  const handleCloseModal = React.useCallback(() => {
    toggleModal(false);
  }, []);

  const handleOpenModal = React.useCallback(() => {
    toggleModal(true);
  }, [])

  return (
    <>
        <StyledHeader>
          <StyledHead1>Support</StyledHead1>
          <TextButton onClick={handleOpenModal}>CREATE TICKET</TextButton>
        </StyledHeader>
        <Routes routes={route.routes} />
        {modalOpened &&
          <Modal head="Create new ticket" onClose={handleCloseModal}>
            <CreateTicketForm onCreate={handleCloseModal}/>
          </Modal>
        }
    </>
    );
};

const StyledHead1 = styled(Head1)`
  margin: unset;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${MD_MAX_CONTENT_WIDTH}px;
  margin: 0 auto 30px;
`;
