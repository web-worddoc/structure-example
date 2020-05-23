import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as IconDelete } from 'ui/assets/icon_file_delete.svg';


type Props = {
    name: string;
    size?: string;

    onDelete?: () => void;
}

export const FilePreview = ({ name, size, onDelete, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            <StyledName>{name}</StyledName>
            {size && <StyledSize>({size})</StyledSize>}
            {onDelete && <StyledIconDelete onClick={onDelete}/>}
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    padding: 0 13px;
    height: 36px;
    display: flex;
    align-items: center;
    background: rgb(245, 245, 245);
    width: max-content;
`;

const StyledName = styled.strong`
    color: var(--color-primary-1);
`;

const StyledSize = styled.div`
    margin-left: 4px;
    font-weight: 400;
`;

const StyledIconDelete = styled(IconDelete)`
    float: right;
    cursor: pointer;
    margin-left: 15px;
`;
