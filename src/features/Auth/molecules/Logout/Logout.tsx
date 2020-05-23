import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as IconLogout } from 'features/Auth/assets/icon_logout.svg';


type Props = {
    onClick: () => void;
    children: React.ReactNode;
}

export const Logout = ({ onClick, children, ...rest }: Props) => {
    return (
        <StyledRoot {...rest} onClick={onClick}>
            <StyledIconLogout/>
            {children}
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    padding: 26px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color .2s ease;
    &:hover {
        color: rgb(234, 66, 66);
        g {
            fill: rgb(234, 66, 66);
            stroke: rgb(234, 66, 66);
        }
    }
`;

const StyledIconLogout = styled(IconLogout)`
    margin-right: 12px;
    g {
        transition: fill .2s ease, stroke .2s ease;
    }
`;
