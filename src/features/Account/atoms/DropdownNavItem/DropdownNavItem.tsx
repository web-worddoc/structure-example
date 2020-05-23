import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


type Props = {
    name: string;
    href: string;
    onClick?: () => void;
}

export const DropdownNavItem = ({ name, href, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            <StyledLink to={href}>
                {name}
            </StyledLink>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    padding: 8px 0 10px;
`;

const StyledLink = styled(Link)`
    display: block;
    padding: 15px 19px;
    color: rgb(31, 31, 31);
    font-size: 15px;
    text-decoration: none;
    transition: background .25s ease;
    &:hover {
        background: rgb(239, 241, 246);
    }
`;
