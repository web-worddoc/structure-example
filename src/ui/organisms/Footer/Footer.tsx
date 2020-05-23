import * as React from 'react';
import styled from 'styled-components';

import { Copyright, Socials } from 'ui';


type Props = {

}

const socialsSources = [
    {
        name: 'skype',
        link: '',
    },
    {
        name: 'telegram',
        link: '',
    },
    {
        name: 'viber',
        link: '',
    },
    {
        name: 'github',
        link: '',
    },
    {
        name: 'youtube',
        link: '',
    },
    {
        name: 'linkedin',
        link: '',
    }
]

export const Footer = ({...rest}: Props) => {
    return (
        <StyledRoot {...rest}>
            <Copyright />
            <Socials sources={socialsSources}/>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
