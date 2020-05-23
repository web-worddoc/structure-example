const prefix = '/api';

export const api = {
  currencies: {
    url: () => `${prefix}/cryptocurrencies`,
  },
  rate: {
    url: (code: string) => `${prefix}/${code}/rate`,
  },
};
