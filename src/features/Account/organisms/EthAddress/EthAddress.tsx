import * as React from 'react';
import { observer } from 'mobx-react';

import { useStore, compose } from 'lib';
import { InputGroup } from 'ui';
import { ReactComponent as IconCopy } from 'ui/assets/icon_copy.svg';


export const EthAddress = compose(observer)((props: any) => {
    const {
        Account: { ethAddr }
    } = useStore();

    return (
        <div {...props}>
            <InputGroup
                label="Eth address:"
                id="eth"
                value={ethAddr || ''}
                mark={<IconCopy/>}
                disabled
            />
        </div>
    )
})
