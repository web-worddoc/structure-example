import styled from 'styled-components';


export const TxnTableHead = styled.th`
    font-size: 16px;
    font-weight: 500;
    color: rgb(31, 31, 31);
    padding-top: 26px;
    padding-bottom: 23px;
    white-space: nowrap;
    &.n1 {
        width: 32%;
        padding-left: 40px;
    }
    &.n2 {
        width: 30%;
        padding-left: 40px;
        text-align: left;
    }
    &.n3 {
        width: 30%;
        padding: 0px 15px;
    }
    &.n4 {
        width: 10%;
        text-align: right;
        padding: 0px 40px 0 15px;
    }
`;
