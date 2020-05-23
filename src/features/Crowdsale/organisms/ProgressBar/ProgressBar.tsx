import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { observer } from 'mobx-react';
import { humanizeAmount } from 'og-utils';

import { useStore, compose } from 'lib';
import { StageInfo } from 'features/Crowdsale';


export const ProgressBar = compose(observer)((props: any) => {
    const {
        Crowdsale: { phases }
    } = useStore();

    return (
        <StyledRoot {...props}>
            <StyledBar>
                <StyledCheckpoint transparent data-dest="$0"/>
                {phases.map((stage, i) => {
                    const isLast = phases.length === i + 1;
                    return (
                        <React.Fragment key={stage.id}>
                            <StyledStageInfo
                                stageID={stage.id + 1}
                                basePrice={stage.basePrice}
                                isActive={stage.isActive}
                            />
                            <StyledCheckpoint transparent={isLast} isLast={isLast} data-dest={`$${humanizeAmount(stage.upperBound / 100)}`}/>
                        </React.Fragment>
                    )
                })}
                <Progress />
            </StyledBar>
        </StyledRoot>
    )
})

const sliding = keyframes`
    0% {
        background-position: -95px 0%;
    }
    100% {
        background-position: 0px 0%;
    }
`;

const StyledRoot = styled.div`
    padding: 40px 60px 70px;
    border-radius: 3px;
    background: rgb(248, 248, 248, .4);
`;

const StyledBar = styled.div`
    height: 86px;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    border-radius: 3px;
    background-image: repeating-linear-gradient(-56deg,
        rgb(239, 241, 246),
        rgb(239, 241, 246) 20px,
        rgb(231, 234, 240) 20px,
        rgb(231, 234, 240) 40px);
    background-size: 200%;
    animation: ${sliding} 6s linear infinite;
`;

const Progress = styled.div`
    min-width: 0.6%;
    max-width: 100%;
    width: 0;
    transition: all 0.35s ease;
    height: 15px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--color-primary-1);
    border-radius: 3px;
`;

const StyledStageInfo = styled(StageInfo)`
    flex-basis: calc(33.3333% - 2.5px);
`;

const StyledCheckpoint = styled(({ transparent, children, ...rest }) => (
    <div {...rest}>{children}</div>
))`
    flex-grow: 1;
    height: 100%;
    background: var(--color-primary-1);
    position: relative;
    &:after {
        content: attr(data-dest);
        color: #1f1f1f;
        font-weight: 600;
        position: absolute;
        left: 50%;
        bottom: -35px;
        transform: translateX(-50%);
    }
    &:first-of-type:after {
        left: 0;
        transform: unset;
    }
    ${({ transparent }) => transparent && css`
        background: transparent;
    `}
    ${({ isLast }) => isLast && css`
        &:after {
            left: unset;
            transform: unset;
            right: 0;
        }
    `}
`;
