import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import {
    paths,
    TICKET_STATUS_CLOSED,
    TICKET_STATUS_SOLVED,
} from 'core';
import { ReactComponent as IconBack } from 'features/Support/assets/icon_ticket_back.svg';
import { ReactComponent as IconSolved } from 'features/Support/assets/icon_ticket_solved.svg';
import { ReactComponent as IconClosed } from 'features/Support/assets/icon_ticket_closed.svg';
import { ReactComponent as IconProcessed } from 'features/Support/assets/icon_ticket_processed.svg';


type Props = {
    title: string;
    status: Status;
}

type Status = 'NEW' | 'CLOSED' | 'IN_WORK' | 'REPLIED' | 'SOLVED' | string;

export const TicketHeader = ({ title, status, ...rest }: Props) => {
    const { push } = useHistory();

    const getStatusIcon = () => {
        return status === TICKET_STATUS_SOLVED ? <IconSolved /> : status === TICKET_STATUS_CLOSED ? <IconClosed /> : <IconProcessed />;
    }

    const handleClickBack = () => {
        push(paths.office.support.tickets.pathname);
    }

    return (
        <StyledRoot {...rest}>
            <StyledTitleWrapper>
                <StyledIconBackWrapper onClick={handleClickBack}>
                    <IconBack/>
                </StyledIconBackWrapper>
                <StyledTitle>{title}</StyledTitle>
            </StyledTitleWrapper>
            <StyledStatusWrapper>
                {getStatusIcon()}
                <StyledStatus>
                    Ticket: {status}
                </StyledStatus>
            </StyledStatusWrapper>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledIconBackWrapper = styled.div`
    padding: 15px;
    cursor: pointer;
    margin-right: 22px;
    display: flex;
    align-items: center;
`;

const StyledTitle = styled.div`
    font-size: 24px;
    position: relative;
    left: -15px;
`;

const StyledStatusWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledStatus = styled.div`
    margin-left: 10px;
`;
