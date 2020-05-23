import * as React from 'react';
import styled from 'styled-components';

import { TOKEN_NAME } from 'core';
import { useStore } from 'lib';
import { Logo } from 'ui';
import { Nav } from 'features/Nav';
import { Balance, Thumbnail, AccountDropdown } from 'features/Account';


export const OfficeHeader = (props: any) => {
    const {
        Account: { totalBalance }
    } = useStore();
    let [dropdownOpened, toggleDropdown] = React.useState<boolean>(false);

    const handleCloseDropdown = React.useCallback(() => {
        toggleDropdown(false);
    }, [])

    return (
        <StyledRoot {...props}>
            <Logo />
            <StyledNav />
            <StyledBalance amount={totalBalance} tokenName={TOKEN_NAME}/>
            <StyledThumbnail onClick={() => toggleDropdown(true)}/>
            {dropdownOpened && <StyledAccountDropdown onClose={handleCloseDropdown}/>}
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    background: #fff;
    border-bottom: 2px solid rgb(230, 232, 242);
    padding-right: 55px;
    z-index: 2;
`;

const StyledNav = styled(Nav)`
    margin:  0 auto 0 40px;
`;

const StyledBalance = styled(Balance)`
    margin-left: 30px;
`;

const StyledThumbnail = styled(Thumbnail)`
    padding-left: 24px;
    margin-left: 24px;
    border-left: solid 1px rgb(61, 87, 170, .15);
    z-index: 2;
`;

const StyledAccountDropdown = styled(AccountDropdown)`
    position: absolute;
    top: 0;
    right: 25px;
`;
