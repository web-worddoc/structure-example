import * as React from 'react';
import styled from 'styled-components';


type Social = {
    link: string;
    name: string;
}

type Props = {
    sources: Social[];
}

export const Socials = ({sources, ...rest}: Props) => {
    return (
        <div {...rest}>
            {sources.map((social, i) => {
                try {
                    const icon = require(`ui/assets/icon_${social.name}.svg`);
                    return <SocialItem key={i} href={social.link}><img src={icon}/></SocialItem>
                } catch (error) {
                    return <></>;
                }
            })}
        </div>
    )
}

const SocialItem = styled.a`
    margin-left: 15px;
`;
