import * as React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as IconArrow } from 'features/Transactions/assets/icon_info_arrow.svg';


type Props = {
    spreadable?: boolean;
    children: React.ReactNode;
    positive?: boolean;
    negative?: boolean;
    className?: string;
}

export const TxnTableCell = styled(({ children, positive, negative, spreadable, ...rest }: Props) => (
    <td {...rest}>
        <div>
            {children}
            {spreadable && <StyledIconArrow/>}
        </div>
    </td>
))`
    color: rgb(31, 31, 31);
    white-space: nowrap;
    &.n1 {
        padding-left: 40px;
        div {
            justify-content: center;
        }
    }
    &.n2 {
        width: 45%;
        padding-left: 40px;
        padding-right: 20px;
        div {
            text-align: left;
        }
    }
    &.n3 {
        min-width: 15%;
        div {
            justify-content: center;
        }
    }
    &.n4 {
        padding-right: 30px;
        div {
            justify-content: center;
        }
    }
    ${({ positive }) => positive && css`
        color: var(--color-positive);
        div:before {
            content: '+'
        }
    `}
    ${({ negative }) => negative && css`
        color: var(--color-negative);
        div:before {
            content: '-'
        }
    `}
    ${({ spreadable }) => spreadable && css`
        div {
            justify-content: flex-end;
        }
    `}
    div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
    }
    a {
        color: currentColor;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            color: var(--color-primary-1);
        }
    }
`;

const StyledIconArrow = styled(IconArrow)`
    margin-left: 18px;
    position: relative;
    top: -2px;
`;
