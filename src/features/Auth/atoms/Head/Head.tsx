import styled, { css } from 'styled-components';

import { Head2 } from 'ui';

type Props = {
    divided?: boolean;
}

export const Head = styled(Head2)<Props>`
    ${({ divided }) => divided && css`
        padding-bottom: 13px;
        border-bottom: solid 1px rgb(151, 151, 151, .3);
    `}
`;
