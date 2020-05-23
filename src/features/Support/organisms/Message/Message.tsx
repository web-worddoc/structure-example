import * as React from 'react';
import styled from 'styled-components';
import { humanizeUTC } from 'og-utils';

import { FilesList } from 'ui';
import { ReactComponent as IconOperator } from 'features/Support/assets/icon_ticket_operator.svg';
import { ReactComponent as IconThumbnail } from 'features/Support/assets/icon_ticket_thumbnail.svg';


type Props = {
    fromSupport: boolean;
    text: string;
    attachments: any[];
    createdAt: string;
}

export const Message = ({ fromSupport, text, attachments, createdAt, ...rest }: Props) => {
    return (
        <StyledRoot {...rest}>
            <StyledThumbnail>
                {fromSupport ? <IconOperator/> : <IconThumbnail/>}
            </StyledThumbnail>

            <div>
                <StyledAuthor>
                    {fromSupport ? 'Support manager' : 'Me'}
                </StyledAuthor>
                <pre>
                    {text}
                </pre>
                {!!attachments.length &&
                    <StyledFilesList files={attachments}/>
                }
                <StyledDate>
                    {humanizeUTC(createdAt, 'MMMM D, YYYY HH:MM')}
                </StyledDate>
            </div>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
    padding-bottom: 42px;
    display: flex;
`;

const StyledThumbnail = styled.div`
    margin-right: 18px;
`;

const StyledAuthor = styled.div`
    color: var(--color-primary-1);
    margin-bottom: 7px;
`;

const StyledFilesList = styled(FilesList)`
    margin-top: 23px;
`;

const StyledDate = styled.div`
    color: rgb(3, 25, 73, .4);
    margin-top: 23px;
`;
