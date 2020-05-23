import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { humanizeUTC } from 'og-utils';

import { useStore, compose } from 'lib';
import { Section1 } from 'ui';
import { TxnTableHead, TxnTableRow, TxnTableCell } from 'features/Transactions';
import { ReactComponent as IconReady } from 'features/Transactions/assets/icon_txn_ready.svg';
import { ReactComponent as IconDirIn } from 'features/Transactions/assets/icon_direction_in.svg';
import { ReactComponent as IconDirOut } from 'features/Transactions/assets/icon_direction_out.svg';


type Props = {
    className?: string;
}

export const TxnTable = compose(observer)(({ className, ...rest }: Props) => {
    const {
        Txn: { all }
    } = useStore();

    return (
        <StyledSection1 className={classnames(className, 'no-padding')} {...rest}>
            <StyledTable>
                <thead>
                    <StyledHeadRow>
                        <StyledTxnTableHead className="n1">Time (UTC)</StyledTxnTableHead>
                        <StyledTxnTableHead className="n2">Transaction</StyledTxnTableHead>
                        <StyledTxnTableHead className="n3">USD amount</StyledTxnTableHead>
                        <StyledTxnTableHead className="n4">SWG tokens</StyledTxnTableHead>
                    </StyledHeadRow>
                </thead>
                <tbody>
                    {all.map(txn => {
                        const spreadable = !!txn.incomingTxn;

                        return (
                            <StyledTxnTableRow key={txn.id} spreadable={spreadable}>
                                <TxnTableCell className="n1">
                                    {humanizeUTC(txn.dateTime, 'YYYY-MM-DD hh:mm')}
                                </TxnTableCell>
                                <TxnTableCell className="n2">
                                    <a target="_blank" href={`https://etherscan.io/tx/${txn.txnHash}`}>{txn.txnHash}</a>
                                    {txn.state === 'ACTUAL' && <StyledIconReady/>}
                                    {txn.direction === 'IN' && <StyledIconDirIn/>}
                                    {txn.direction === 'OUT' && <StyledIconDirOut/>}
                                </TxnTableCell>
                                <TxnTableCell
                                    className="n3"
                                    positive={Math.sign(txn.usdAmount) === 1}
                                    negative={Math.sign(txn.usdAmount) === -1}
                                >
                                    {txn.usdAmount || '—'}
                                </TxnTableCell>
                                <TxnTableCell
                                    className="n4"
                                    positive={Math.sign(txn.usdAmount) === 1}
                                    negative={Math.sign(txn.usdAmount) === -1}
                                    spreadable={spreadable}
                                >
                                    {txn.tokenAmount || '—'}
                                </TxnTableCell>
                            </StyledTxnTableRow>
                        )
                    })}
                </tbody>
            </StyledTable>
        </StyledSection1>
    )
})

const StyledSection1 = styled(Section1)`
    min-width: 1190px;
`;

const StyledTable = styled.table`
    width: 100%;
`;

const StyledHeadRow = styled.tr`
    flex-basis: 100%;
    margin-bottom: 23px;
`;

const StyledTxnTableHead = styled(TxnTableHead)`
    border-bottom: 1px solid #eaeaea;
`;

const StyledTxnTableRow = styled(TxnTableRow)`
    &:not(:first-of-type) {
        td {
            border-top: 1px solid #eaeaea;
        }
    }
`;

const StyledIconReady = styled(IconReady)`
    margin-left: 8px;
`;

const StyledIconDirIn = styled(IconDirIn)`
    margin-left: 8px;
`;

const StyledIconDirOut = styled(IconDirOut)`
    margin-left: 8px;
`;
