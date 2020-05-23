const prefix = '/api';

export const api = {
  createOrder: {
    url: (code: string) => `${prefix}/${code}/newOrder`,
  },
  orderStatus: {
    url: () => `${prefix}/orderStatus`,
  },
};
