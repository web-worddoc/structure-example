import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { useStore, compose } from 'lib';
import { InputGroup, Button, QRCode } from 'ui';
import { ReactComponent as IconQR } from 'features/Payment/features/Order/assets/icon_qr.svg';


export const Recipient = compose(observer)((props: any) => {
    const {
        Order: { address }
    } = useStore();

    return (
        <StyledRoot {...props}>
            <StyledInputGroup
                id="ethAddress"
                label="Recipient address"
                value={address || ''}
                mark={
                    <StyledQRMark>
                        <StyledIconQR />
                        <StyledQRCodeWrapper>
                            <QRCode value={address ? address : 'UNKNOWN'}/>
                        </StyledQRCodeWrapper>
                    </StyledQRMark>
                }
            />
            <Button transparent>COPY</Button>
        </StyledRoot>
    )
})

const StyledRoot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const StyledInputGroup = styled(InputGroup)`
    flex: 1;
    margin-right: 20px;
`;

const StyledQRMark = styled.div`
    position: relative;
`;

const StyledIconQR = styled(IconQR)`
    cursor: pointer;
    &:hover + div {
        visibility: visible;
        opacity: 1;
    }
`;

const StyledQRCodeWrapper = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 4px;
    background: white;
    box-shadow: 0 9px 21px 0 rgba(173, 182, 217, 0.3);
    user-select: none;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, calc(-100% - 20px));
    visibility: hidden;
    opacity: 0;
    transition: opacity .25s ease, visibility .25s ease;
    &:after {
        content: "";
        border: 8px solid transparent;
        border-top: 11px solid white;
        position: absolute;
        left: 50%;
        bottom: -19px;
        transform: translateX(-50%);
    }
    img {
        width: 100%;
        height: auto;
    }
`;

