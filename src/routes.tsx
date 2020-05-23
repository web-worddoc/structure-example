import * as React from 'react';
import { Redirect } from 'react-router-dom';

import {
    paths,
    USER_STATUS_NOT_AUTH,
    USER_STATUS_NO_PASSWORD
} from 'core';
import {
    guardAuth,
    guardNotAuth,
    guardOneOfUserStatus,
    guardCanInvest,
    guardNotPublicSale,
    guardOrderExists,
    guardNoOrderExists
} from 'lib';
import {
    AuthPage,
    LoginPage,
    RegisterPage,
    CompleteRegistryPage,
    RecoveryPage,
    NewPasswordPage,

    OfficePage,
    AccountPage,
    DashboardPage,
    TransactionsPage,
    PaymentPage,
    CalculationPage,
    OrderPage,
    FeedbackPage,
    SupportPage,
    TicketsPage,
    TicketPage,
    KeeperPage,
} from 'pages';


export const routes = [
    {
        path: paths.auth.pathname,
        component: AuthPage,
        guards: [guardNotAuth],
        exact: false,
        routes: [
            {
                path: paths.auth.login.pathname,
                component: LoginPage,
                guards: [guardOneOfUserStatus([USER_STATUS_NOT_AUTH])],
                routes: [],
            }, {
                path: paths.auth.register.pathname,
                component: RegisterPage,
                guards: [guardOneOfUserStatus([USER_STATUS_NOT_AUTH])],
                routes: [],
            }, {
                path: paths.auth.register.complete.pathname,
                component: CompleteRegistryPage,
                routes: [],
            }, {
                path: paths.auth.recovery.pathname,
                component: RecoveryPage,
                guards: [guardOneOfUserStatus([USER_STATUS_NOT_AUTH])],
                routes: [],
            }, {
                path: paths.auth.recovery.newPassword.pathname,
                component: NewPasswordPage,
                routes: [],
            }, {
                component: () => <Redirect to={paths.auth.login.pathname} />,
                guards: [guardOneOfUserStatus([USER_STATUS_NOT_AUTH])]
            }, {
                component: () => <Redirect to={paths.auth.register.complete.pathname} />,
                guards: [guardOneOfUserStatus([USER_STATUS_NO_PASSWORD])]
            }
        ],
    },
    {
        path: paths.office.pathname,
        component: OfficePage,
        guards: [guardAuth],
        exact: false,
        routes: [
            {
                path: paths.office.pathname,
                component: DashboardPage,
                routes: [],
            }, {
                path: paths.office.transactions.pathname,
                component: TransactionsPage,
                routes: [],
            }, {
                path: paths.office.account.pathname,
                component: AccountPage,
                routes: [],
            }, {
                path: paths.office.keeper.pathname,
                component: KeeperPage,
            },  {
                path: paths.office.support.pathname,
                component: SupportPage,
                exact: false,
                routes: [
                    {
                        path: paths.office.support.tickets.pathname,
                        component: TicketsPage,
                        routes: [],
                    }, {
                        path: paths.office.support.tickets.ticket.pathname + '/:id?',
                        component: TicketPage,
                        routes: [],
                    }
                ],
            }, {
                path: paths.office.payment.pathname,
                component: PaymentPage,
                exact: false,
                guards: [guardCanInvest],
                routes: [
                    {
                        path: paths.office.payment.calculation.pathname,
                        component: CalculationPage,
                        guards: [guardCanInvest, guardNoOrderExists],
                        routes: [],
                    }, {
                        path: paths.office.payment.order.pathname,
                        component: OrderPage,
                        guards: [guardCanInvest, guardOrderExists],
                        routes: [],
                    }, {
                        path: paths.office.payment.feedback.pathname,
                        component: FeedbackPage,
                        guards: [guardCanInvest, guardOrderExists],
                        routes: [],
                    },{
                        component: () => <Redirect to={paths.office.payment.calculation.pathname} />,
                        guards: [guardCanInvest, guardNoOrderExists]
                    }, {
                        component: () => <Redirect to={paths.office.payment.order.pathname} />,
                        guards: [guardCanInvest, guardOrderExists]
                    }
                ],
            }, {
                component: () => <Redirect to={paths.office.pathname} />
            }
        ],
    }, {
        component: () => <Redirect to={paths.office.pathname} push/>,
        guards: [guardAuth]
    }, {
        component: () => <Redirect to={paths.auth.login.pathname} push/>,
        guards: [guardNotAuth]
    }
];
