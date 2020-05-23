import { observable, action } from 'mobx';

import { api } from 'features/Transactions/api';


interface ITxnStore {
    all: any[];
    fetchAll: () => Promise<any>
}

export class TxnStore implements ITxnStore {
    constructor(private rootStore: any) {
        setTimeout(this.fetchAll, 0);
    }

    @observable all: any[] = [];

    @action
    fetchAll = async () => {
        const res = await this.rootStore.HTTP.get(api.transactions.url());

        this.all = res.body;
    }
}
