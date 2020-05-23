import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { TOKEN_NAME, paths } from 'core';
import { useStore, useOnClickOutside, compose } from 'lib';
import { DropdownBalance, BalanceSource, DropdownNavItem, Email } from 'features/Account';
import { Logout } from 'features/Auth';


type Props = {
    onClose: () => void;
}

const NAV_MAP = [
    {
        name: 'Account setup',
        href: paths.office.account.pathname
    }
]

export const AccountDropdown = compose(observer)(({ onClose, ...rest }: Props) => {
    const ref = React.useRef(null);
    const {
        Account: { totalBalance, balances, email },
        Auth: { logout },
    } = useStore();
    useOnClickOutside(ref, onClose)

    const handleLogout = React.useCallback(async () => {
        await logout();
        onClose();
    }, []);

    return (
        <StyledRoot {...rest} ref={ref}>
            <StyledDropdownBalance amount={totalBalance} tokenName={TOKEN_NAME} />
            {Object.entries(balances).map((el, i) => (
                <StyledBalanceSource key={i} from={el[0].split('_').join(' ')} amount={el[1]} tokenName={TOKEN_NAME}/>
            ))}
            <StyledEmail address={email}/>
            {NAV_MAP.map((el, i) => (
                <StyledDropdownNavItem href={el.href} name={el.name} onClick={onClose}/>
            ))}
            <Logout onClick={handleLogout}>
                Log out
            </Logout>
        </StyledRoot>
    )
})

const StyledRoot = styled.div`
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 10px 21px 0 rgba(173, 182, 217, 0.3);
`;

const StyledDropdownBalance = styled(DropdownBalance)`
    height: 90px;
    border-bottom: 2px solid rgb(193, 193, 193, .3);
    padding: 13px 155px 0 19px;
`;

const StyledBalanceSource = styled(BalanceSource)`
    &:not(:last-of-type) {
        border-bottom: 1px solid rgb(193, 193, 193, .3);
    }
`;

const StyledEmail = styled(Email)`
     border-bottom: 1px solid rgb(193, 193, 193, .3);
`;

const StyledDropdownNavItem = styled(DropdownNavItem)`
    border-bottom: 1px solid rgb(193, 193, 193, .3);
`;
