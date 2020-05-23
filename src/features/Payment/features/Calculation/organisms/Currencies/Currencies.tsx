import * as React from 'react';
import styled from 'styled-components';

import { useStore } from 'lib';
import { Head2 } from 'ui';
import { CurrencyCard, Expander } from 'features/Payment/features/Calculation';
import { ReactComponent as IconBTC } from 'features/Payment/features/Calculation/assets/icon_btc.svg';
import { ReactComponent as IconETH } from 'features/Payment/features/Calculation/assets/icon_eth.svg';
import { ReactComponent as IconDAI } from 'features/Payment/features/Calculation/assets/icon_dai.svg';
import { ReactComponent as IconUSDT } from 'features/Payment/features/Calculation/assets/icon_usdt.svg';
import { ReactComponent as IconDLE } from 'features/Payment/features/Calculation/assets/icon_dle.svg';
import { ReactComponent as IconUNKNOWN } from 'features/Payment/features/Calculation/assets/icon_unknown.svg';


type ICON = {
    [key: string]: React.ReactNode
}

const ICONS_MAP: ICON = {
    BTC: <IconBTC/>,
    ETH: <IconETH/>,
    DAI: <IconDAI/>,
    USDT: <IconUSDT/>,
    DLE: <IconDLE/>,
    UNKNOWN: <IconUNKNOWN/>
}

export const Currencies = (props: any) => {
    const {
        Currency: { all, setSelected }
    } = useStore();

    const firstActiveID: any = all.find((el: any) => el.active)?.id || -1;
    const [expanded, toggleExpanded] = React.useState<boolean>(false);
    const [activeID, setActiveID] = React.useState<number>(firstActiveID);

    React.useEffect(() => {
        if (activeID)
            setSelected(activeID);
    }, [activeID]);

    React.useEffect(() => {
        if (activeID)
            setSelected(activeID);
    }, [activeID]);

    const handleExpand = () => {
        toggleExpanded(!expanded);

        if (activeID > all[3].id) {
            setActiveID(firstActiveID);
        } 
    }

    const handleSelect = (id: number) => () => {
        setActiveID(id);
    }

    return (
        <StyledRoot {...props}>
            <StyledHead2>Select payment method</StyledHead2>
            <StyledCurrencies>
                {all.slice(0, !expanded ? 4 : undefined).map((el, i) => (
                    <CurrencyCard
                        key={el.id}
                        isActive={el.id === activeID}
                        isDisabled={el.active}
                        name={el.name}
                        code={el.code}
                        icon={ICONS_MAP[el.code] || ICONS_MAP.UNKNOWN}
                        onClick={handleSelect(el.id)}
                    />
                ))}
            </StyledCurrencies>
            <Expander onClick={handleExpand}>
                {!expanded ? 'Показать все способы оплаты' : 'Скрыть дополнительные способы оплаты'}
            </Expander>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
`;

const StyledHead2 = styled(Head2)`
    margin-bottom: 40px;
`;

const StyledCurrencies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 30px;
    margin-bottom: 30px;
`;
