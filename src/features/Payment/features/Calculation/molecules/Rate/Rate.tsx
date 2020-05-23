import * as React from 'react';
import styled from 'styled-components';


type Props = {
    children: React.ReactNode;
}

export const Rate = ({ children, ...rest }: Props) => {
    return (
        <div {...rest}>
            <StyledLabel>Course</StyledLabel>
            <div>{children}</div>
        </div>
    )
}

const StyledLabel = styled.div`
    font-weight: 400;
    white-space: nowrap;
    margin-bottom: 20px;
`;
