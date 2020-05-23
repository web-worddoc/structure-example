import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

type Props = {
    name: string;
    href: string;
    exact: boolean;
    icon: React.ReactNode;
}

export const NavItem = ({ name, href, icon, exact, ...rest }: Props) => {
    return (
        <StyledNavLink {...rest} to={href} exact={exact} activeClassName="active">
            {icon}
            <StyledName>
                {name}
            </StyledName>
        </StyledNavLink>
    )
}

const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    white-space: nowrap;
    position: relative;
    filter: grayscale(100%) opacity(25%);
    color: rgb(0, 22, 69);
    &:not(:first-of-type) {
        margin-left: 27px;
    }
    &:before {
        content: '';
        height: 2px;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        background: #2867ef;
        opacity: 0;
    }
    &:hover {
        filter: grayscale(100%) opacity(100%);
    }
    &.active {
        filter: unset;
        &:before {
            opacity: 1;
        }
    }
`;

const StyledName = styled.div`
    margin-left: 11px;
`;
