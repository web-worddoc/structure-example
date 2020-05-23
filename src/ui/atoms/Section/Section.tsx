import React from 'react';
import classnames from 'classnames';


type Props = {
    children: React.ReactNode;
    className?: string;
}

export const Section1 = ({ children, className, ...rest }: Props) => (
    <section className={classnames(className, 'section-1')} {...rest}>
        {children}
    </section>
);

export const Section2 = ({ children, className, ...rest }: Props) => (
    <section className={classnames(className, 'section-2')} {...rest}>
        {children}
    </section>
);
