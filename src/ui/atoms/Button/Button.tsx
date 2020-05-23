import * as React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as IconAttach } from 'ui/assets/icon_attach.svg';


type Props = {
    children: React.ReactNode
    className?: string;
    type?: 'submit' | 'button' | undefined;
    maxWidth?: boolean;
    transparent?: boolean;
    isDisabled?: boolean;
    isSubmitting?: boolean;
    isAttacher?: boolean;
    isUploading?: boolean;

    onClick?: () => void;
}

export const Button = styled(({
    children,
    transparent,
    isDisabled = false,
    isSubmitting,
    isAttacher,
    onClick,
    isUploading,
    ...rest
}: Props) => (
        <button {...rest} onClick={!isDisabled && onClick ? onClick : undefined}>
            {isSubmitting ?
                <>Submitting...</> :
                isAttacher ?
                <>
                    {children} <IconAttach/>
                </> :
                <>
                    {children}
                </>
            }
        </button>
))`
    height: 52px;
    min-width: max-content;
    max-width: 250px;
    width: 100%;
    display: block;
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.25s ease;
    padding-top: 3px;
    color: #fff;
    background: var(--color-primary-1);
    border: 1px solid var(--color-primary-1);
    padding: 0 47px;
    font-weight: 500;
    position: relative;
    &[disabled] {
        cursor: not-allowed;
        background: gray;
    }
    &:hover {
        background: rgb(56,98,189);
    }
    svg path {
        transition: fill .25s ease;
    }
    ${({ transparent }) => transparent && css`
        background: transparent;
        color: var(--color-primary-1);
        svg path {
            fill: var(--color-primary-1); 
        }
        &:hover {
            color: #fff;
            svg path {
                fill: #fff; 
            }
        }
    `}
    ${({ maxWidth }) => maxWidth && css`
        max-width: unset;
        width: 100%;
    `}
    ${({ isDisabled }) => isDisabled && css`
        cursor: not-allowed;
        background: var(--color-disabled);
        border: none;
        pointer-events: hover;
        &:hover {
            color: #fff;
            background: var(--color-disabled);
        }
    `}
    ${({ isAttacher }) => isAttacher && css`
        svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
        }
    `}
`
