import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as IconThumbnail } from 'features/Account/assets/icon_thumbnail.svg';
import { ReactComponent as IconArrow } from 'features/Account/assets/icon_thumbnail_arrow.svg';


export const Thumbnail = (props: any) => {
    return (
        <StyledRoot {...props}>
            <IconThumbnail />
            <StyledIconArrow/>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const StyledIconArrow = styled(IconArrow)`
    margin-left: 20px;
`;
