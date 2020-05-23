import * as React from 'react';
import styled from 'styled-components';

import { paths } from 'core';
import { NavItem } from 'features/Nav';
import { ReactComponent as IconDashboard } from 'features/Nav/assets/icon_dashboard.svg';
import { ReactComponent as IconTransactions } from 'features/Nav/assets/icon_transactions.svg';
import { ReactComponent as IconKeeper } from 'features/Nav/assets/icon_keeper.svg';
import { ReactComponent as IconSupport } from 'features/Nav/assets/icon_support.svg';
import { ReactComponent as IconFAQ } from 'features/Nav/assets/icon_faq.svg';


const NAV_MAP = [
    {
        name: 'Dashboard',
        href: paths.office.pathname,
        exact: true,
        icon: <IconDashboard/>
    }, {
        name: 'Transactions',
        href: paths.office.transactions.pathname,
        exact: true,
        icon: <IconTransactions/>
    }, {
        name: 'Keeper',
        href: paths.office.keeper.pathname,
        exact: true,
        icon: <IconKeeper/>
    }, {
        name: 'Support',
        href: paths.office.support.tickets.pathname,
        exact: false,
        icon: <IconSupport/>
    }, {
        name: 'FAQ',
        href: paths.faq.pathname,
        exact: true,
        icon: <IconFAQ/>
    }
]

export const Nav = (props: any) => {
    return (
        <StyledRoot {...props}>
            {NAV_MAP.map((el, i) => (
                <StyledNavItem key={i} name={el.name} icon={el.icon} exact={el.exact} href={el.href}/>
            ))}
        </StyledRoot>
    )
}

const StyledRoot = styled.nav`
    display: flex;
    height: 100%;
`;

const StyledNavItem = styled(NavItem)`
    &:not(:first-of-type) {
        margin-left: 27px;
    }
`;
