import * as React from 'react';
import styled from 'styled-components';

import { BONUS_MAP } from 'core';


export const BonusMap = (props: any) => {
    return (
        <StyledRoot {...props}>
            {BONUS_MAP.map((el, i) => (
                <React.Fragment key={i}>
                    {!el.to ?
                        <StyledCell>
                            From ${el.from} = <span>+{el.value}%</span>
                        </StyledCell> :
                        <StyledCell>
                            ${el.from} — ${el.to} = <span>+{el.value}%</span>
                        </StyledCell>
                    }
                </React.Fragment>
            ))}
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const StyledCell = styled.div`
    display: flex;
    align-items: center;
    height: 62px;
    padding-left: 30px;
    border: 1px solid rgb(227, 227, 227);
    flex-basis: 25%;
    white-space: nowrap;
    span {
        color: var(--color-primary-1);
    }
`;
