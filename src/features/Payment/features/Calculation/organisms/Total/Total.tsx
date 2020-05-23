import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { FormikState } from 'handy-formik';

import { TOKEN_NAME, MIN_INVEST, MAX_INVEST } from 'core';
import { compose, useStore } from 'lib';
import { Button } from 'ui';


export const Total = compose(observer)((props: any) => {
    const {
        Calculation: { investedFiat, total }
    } = useStore();

    return (
        <StyledRoot {...props}>
            <StyledText>You get Total = {total} {TOKEN_NAME}</StyledText>
            <FormikState render={({ isSubmitting, submitForm }) => (
                <Button
                    type="submit"
                    isSubmitting={isSubmitting}
                    onClick={submitForm}
                    isDisabled={investedFiat < MIN_INVEST || investedFiat > MAX_INVEST}
                >
                    BUY
                </Button>
            )}/>
        </StyledRoot>
    )
})

const StyledRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledText = styled.div`
    font-size: 40px;
    line-height: 46px;
    font-weight: 400;
    margin-right: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
        font-size: 20px;
    }
`;
