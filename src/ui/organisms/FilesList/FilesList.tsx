import * as React from 'react';
import styled from 'styled-components';
import { humanizeBytes } from 'og-utils';

import { FilePreview } from 'ui';


type Props = {
    files: File[];

    onDelete?: (targetIndex: number) => void;
}

type File = {
    name: string;
    size: number;
    preview: string;
    src: any;
}

export const FilesList = ({ files, onDelete, ...rest }: Props) => {
    return (
        <>
            {!!files.length &&
                <StyledRoot {...rest}>
                <StyledLength>Attached files: {files.length}</StyledLength>
                {files.map((el: File, i: number) => {
                    const humanizedSize = humanizeBytes(el.size, 2);

                    return (
                        <StyledFilePreview
                            key={i}
                            name={el.name}
                            size={humanizedSize ? `${humanizedSize.size} ${humanizedSize.units}` : undefined}
                            onDelete={onDelete ? onDelete.bind(null, i) : undefined}
                        />
                    )
                })}
                </StyledRoot>
            }
        </>
    )
}

const StyledRoot = styled.div``;

const StyledLength = styled.div`
    margin-bottom: 10px;
`;

const StyledFilePreview = styled(FilePreview)`
    &:not(:last-of-type) {
        margin-bottom: 4px;
    }
`;
