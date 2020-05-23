import * as React from 'react';
import styled from 'styled-components';

import { useCountdown } from 'lib';
import { ReactComponent as IconClock } from 'ui/assets/icon_clock.svg';


type Props = {
    until: string;
    onReach?: () => void;
}

export const Countdown = ({ until, onReach, ...rest }: Props) => {
    let time = useCountdown(until, onReach);

    return (
        <>
            {time && 
                <StyledRoot {...rest}>
                    <StyledIconClock />
                    <StyledTitle>
                        Time left:
                    </StyledTitle>
                    <StyledTime>
                        {!!time.hours &&
                            <>
                            {time.hours} hours&nbsp;
                            </>
                        }
                        {time.min} min&nbsp;
                        {time.sec} sec
                    </StyledTime>
                </StyledRoot>
            }
        </>
    )
}

const StyledRoot = styled.div`
    display: flex;
    align-items: center;
`;

const StyledIconClock = styled(IconClock)`
    margin-right: 9px;
`;

const StyledTitle = styled.div`
    color: var(--color-primary-1);
    margin-right: 20px;
`;

const StyledTime = styled.div`
    color: rgb(21, 43, 88);
`;
