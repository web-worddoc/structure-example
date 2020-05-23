import * as React from 'react';
import styled, { css } from 'styled-components';


type Props = {
    children: React.ReactNode;
    spreadable?: boolean;

    onClick?: () => void;
}

export const TxnTableRow = styled(({ children, spreadable, ...rest }: Props) => (
    <tr {...rest}>{children}</tr>
))`
    height: 73px;
    ${({ spreadable }) => spreadable && css`
        cursor: pointer;
        &:hover {
            div, td {
                color: var(--color-primary-1);
            }
        }
    `}
`;
