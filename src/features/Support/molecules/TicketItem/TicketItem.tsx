import * as React from 'react';
import styled from 'styled-components';
import { humanizeUTC } from 'og-utils';

import {
    TICKET_STATUS_NEW,
    TICKET_STATUS_CLOSED,
    TICKET_STATUS_IN_WORK,
    TICKET_STATUS_REPLIED,
    TICKET_STATUS_SOLVED
} from 'core';
import { ReactComponent as IconOperator } from 'features/Support/assets/icon_ticket_operator.svg';
import { ReactComponent as IconThumbnail } from 'features/Support/assets/icon_ticket_thumbnail.svg';
import { ReactComponent as IconSolved } from 'features/Support/assets/icon_ticket_solved.svg';
import { ReactComponent as IconClosed } from 'features/Support/assets/icon_ticket_closed.svg';
import { ReactComponent as IconProcessed } from 'features/Support/assets/icon_ticket_processed.svg';


type Status = 'NEW' | 'CLOSED' | 'IN_WORK' | 'REPLIED' | 'SOLVED' | string;

type Props = {
    title: string;
    status: Status;
    fromSupport: boolean;
    updatedAt: string;
    createdAt: string;
}

export const TicketItem = ({ title, status, fromSupport, updatedAt, createdAt, ...rest }: Props) => {
    const getStatusIcon = () => {
        return status === TICKET_STATUS_SOLVED ? <IconSolved /> : status === TICKET_STATUS_CLOSED ? <IconClosed /> : <IconProcessed />;
    }

    const getLastAction = () => {
        switch (status) {
            case TICKET_STATUS_NEW: {
                return `Created at ${humanizeUTC(createdAt, 'M D, YYYY')}`;
            }
            case TICKET_STATUS_CLOSED: {
                return `Closed at ${humanizeUTC(updatedAt, 'M D, YYYY')}`
            }
            case TICKET_STATUS_IN_WORK: {
                return `Sent message at ${humanizeUTC(updatedAt, 'M D, YYYY')}`
            }
            case TICKET_STATUS_REPLIED: {
                return `Replied at ${humanizeUTC(updatedAt, 'M D, YYYY')}`
            }
            case TICKET_STATUS_SOLVED: {
                return `Solved at ${humanizeUTC(updatedAt, 'M D, YYYY')}`
            }
        }
    }

    return (
        <StyledRoot {...rest}>
            <StyledTitleAndStatus>
                {getStatusIcon()}
                <div>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledStatus>{status}</StyledStatus>
                </div>
            </StyledTitleAndStatus>
            <StyledDate>
                {fromSupport ? <IconOperator /> : <IconThumbnail />}
                <div>
                    <StyledAuthor>{fromSupport ? 'Support manager' : 'Me'}</StyledAuthor>
                    <StyledLastAction>
                        {getLastAction()}
                    </StyledLastAction>
                </div>
            </StyledDate>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0;
    cursor: pointer;
`;

const StyledTitleAndStatus = styled.div`
    display: flex;
    align-items: center;
    svg {
        margin-right: 16px;
    }
`;

const StyledTitle = styled.div`
    margin-bottom: 4px;
`;

const StyledStatus = styled.div`
    text-transform: lowercase;
    font-size: 12px;
    color: rgb(31, 31, 31, .4);
    &::first-letter {
        text-transform: uppercase;
    }
`;

const StyledDate = styled.div`
    display: flex;
    align-items: center;
    svg {
        margin-right: 16px;
    }
`;

const StyledAuthor = styled.div`
    margin-bottom: 4px;
`;

const StyledLastAction = styled.div`
    font-size: 12px;
    color: rgb(31, 31, 31, .4);
`;
