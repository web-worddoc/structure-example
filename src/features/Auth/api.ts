const prefix = '/api';

export const api = {
    login: {
        url: () => `${prefix}/demoLogin`,
    },
    logout: {
        url: () => `${prefix}/logout`,
    },
    register: {
        url: () => `${prefix}/register`,
    },
    completeRegistry: {
        url: () => `${prefix}/user/password`,
    },
    recover: {
        url: () => `${prefix}/password-reset`,
    },
    completePasswordReset: {
        url: () => `${prefix}/password-reset/confirm`,
    },
};
