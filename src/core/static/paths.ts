export const paths = {
    auth: {
        pathname: '/auth',
        login: {
            pathname: '/auth/login'
        },
        register: {
            pathname: '/auth/register',
            complete: {
                pathname: '/auth/register/complete/:token?'
            }
        },
        recovery: {
            pathname: '/auth/recovery',
            newPassword: {
                pathname: '/auth/recovery/new-password/:id?'
            }
        }
    },
    office: {
        pathname: '/',
        transactions: {
            pathname: '/transactions'
        },
        payment: {
            pathname: '/payment',
            calculation: {
                pathname: '/payment/calculation'
            },
            order: {
                pathname: '/payment/order'
            },
            feedback: {
                pathname: '/payment/feedback'
            },
        },
        keeper: {
            pathname: '/keeper'
        },
        support: {
            pathname: '/support',
            tickets: {
                pathname: '/support/tickets',
                ticket: {
                    pathname: '/support/tickets'
                }
            },
            create: {
                pathname: '/support/new-ticket'
            }
        },
        account: {
            pathname: '/account'
        }
    },
    faq: {
        pathname: '/faq'
    }
};
