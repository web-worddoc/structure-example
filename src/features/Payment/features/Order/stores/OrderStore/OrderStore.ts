import { computed, observable, action } from 'mobx';

import { api } from 'features/Payment/features/Order/api';


interface IOrderStore {
    status: string | null;
    currency: string | null;
    tokenAmount: number | null;
    address: string | null;
    expire: string | null;
    amount: number | null;
    orderExists: boolean | null;
    orderExisted: boolean | null;

    fetch: () => Promise<any>;
    create: (data: CreateProps) => Promise<any>;
}

type CreateProps = {
    code: string;
    amount: number;
    usdAmount: number;
}

export class OrderStore implements IOrderStore {
    constructor(private rootStore: any) {
        setTimeout(this.fetch, 0);
    }

    @observable status: string | null = null;
    @observable currency: string | null = null;
    @observable address: string | null = null;
    @observable expire: string | null = null;
    @observable tokenAmount: number | null = null;
    @observable amount: number | null = null;
    @observable orderExists: boolean | null = null;
    @observable orderExisted: boolean | null = null;

    @action
    forceExpire = () => {
        this.status = null;
        this.currency = null;
        this.address = null;
        this.expire = null;
        this.tokenAmount = null;
        this.amount = null;
        this.orderExisted = true;
        this.orderExists = false;
    }

    @action
    fetch = async () => {
        try {
            const res = await this.rootStore.HTTP.get(api.orderStatus.url());

            this.status = res.body.status;
            this.currency = res.body.currency;
            this.address = res.body.address;
            this.expire = res.body.expire;
            this.tokenAmount = Number(res.body.tokenAmount);
            this.amount = Number(res.body.amount);
            this.orderExists = true;

            return res;
        } catch (err) {
            this.orderExists = false;
            throw err;
        }
    }

    create = async ({ code, amount, usdAmount }: CreateProps) => {
        try {
            const res = await this.rootStore.HTTP.post(api.createOrder.url(code.toLowerCase()), {
                amount,
                usdAmount
            });

            if (res.body.url) {
                window.open(res.body.url, '_blank');
            }

            this.fetch();
            return res;
        } catch (err) {
            throw err;
        }
    }
}
