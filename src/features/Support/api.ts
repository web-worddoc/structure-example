const prefix = '/api';

export const api = {
    createTicket: {
        url: () => `${prefix}/user/support`,
    },
    tickets: {
        url: () => `${prefix}/user/support`,
    },
    ticket: {
        url: (id: number) => `${prefix}/user/support/${id}/messages`,
    },
    createMessage: {
        url: (id: number) => `${prefix}/user/support/${id}/messages`,
    },
    closeTicket: {
        url: (id: number) => `${prefix}/user/support/${id}/close`,
    },
};
