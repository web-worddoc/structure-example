import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { Routes, compose, useStore, useDidUpdate } from 'lib';
import { Head1, Modal } from 'ui';
import { Steps } from 'features/Payment';
import { ReactComponent as IconClock } from 'ui/assets/icon_clock.svg';


type Props = {
  route: any
}

type ModalProps = {
  onClose: () => void;
}

const ExpireModal = React.memo(({ onClose, ...rest }: ModalProps) => {
  return (
    <Modal head={<StyledModalHead>Time is out...</StyledModalHead>} onClose={onClose} {...rest}>
      <StyledModalContent>
        <StyledIconClock />
        <StyledModalText>Time is over.<br/> Create a new order if you want to buy tokens.</StyledModalText>
      </StyledModalContent>
    </Modal>
  )
})


export const PaymentPage = compose(observer)(({ route }: Props) => {
  const [showExpireModal, toggleExpireModal] = React.useState<boolean>(false);
  const {
    Account: { canInvest },
    Order: { orderExists, orderExisted }
  } = useStore();

  useDidUpdate(() => {
    if (orderExists === false && orderExisted) {
      toggleExpireModal(true);
    }
  }, [orderExists, orderExisted])

  const handleCloseModal = React.useCallback(() => {
    toggleExpireModal(false);
  }, []);
  
  return (
      <>
        <StyledHead1>Payment</StyledHead1>  
        <StyledSteps />
        <Routes routes={route.routes} context={{ canInvest, orderExists }}/>
        {showExpireModal && <ExpireModal onClose={handleCloseModal}/>}
      </>
    );
});

const StyledHead1 = styled(Head1)`
  margin-bottom: 40px;
`;

const StyledSteps = styled(Steps)`
  margin-bottom: 35px;
`;

const StyledModalHead = styled.div`
  font-size: 24px;
`;

const StyledModalContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const StyledIconClock = styled(IconClock)`
  width: 39px;
  height: auto;
  margin-bottom: 14px;
`;

const StyledModalText = styled.div`
  color: var(--color-primary-1);
  text-align: center;
`;
