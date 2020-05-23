import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as IconDots } from 'ui/assets/icon_dots.svg';


type Props = {
    children: React.ReactNode;

    onClick: () => void;
}

export const TextButton = ({ children, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            {children}
            <StyledIconDots/>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    color: var(--color-primary-1);
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const StyledIconDots = styled(IconDots)`
    margin-left: 17px;
`;
