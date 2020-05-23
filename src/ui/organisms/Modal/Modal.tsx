import * as React from 'react';
import styled from 'styled-components';

import { useOnClickOutside } from 'lib';
import { ReactComponent as IconClose } from 'ui/assets/icon_modal_close.svg';


type Props = {
    head: React.ReactNode;
    children: React.ReactNode;

    onClose: () => void;
}

export const Modal = ({ head, children, onClose, ...rest }: Props) => {
    let ref = React.useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, onClose)

    React.useEffect(() => {
        document.documentElement.classList.add('noScroll');
        return () => {
            document.documentElement.classList.remove('noScroll');
        }
    }, []);

    return (
        <StyledRoot {...rest}>
            <StyledModalInner ref={ref}>
                <StyledCloseButton onClick={onClose}>
                    <IconClose/>
                </StyledCloseButton>
                <StyledHeader>
                    {head}
                </StyledHeader>
                <StyledContent>
                    {children}
                </StyledContent>
            </StyledModalInner>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    background: rgb(0, 0, 0, .16);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
`;

const StyledModalInner = styled.div`
    max-height: 60%;
    position: relative;
    width: 850px;
    display: flex;
    flex-flow: column nowrap;
`;

const StyledHeader = styled.div`
    padding: 20px 0;
    background: rgb(251, 251, 251);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;

const StyledContent = styled.div`
    padding: 32px 32px;
    background: #fff;
    overflow-y: auto;
    flex: 1;
`;

const StyledCloseButton = styled.div`
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(255, 255, 255);
    position: absolute;
    right: -10px;
    top: 0;
    transform: translateX(100%);
    cursor: pointer;
`;
