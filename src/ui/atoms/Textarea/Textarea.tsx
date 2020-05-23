import * as React from 'react';
import styled from 'styled-components';


export const Textarea = styled(props => (
    <textarea {...props}/>
))`
    min-height: 180px;
    width: 100%;
    padding: 16px;
    background: rgb(246, 246, 246);
    border: solid 1px rgb(214, 223, 230);
    resize: none;
`;
