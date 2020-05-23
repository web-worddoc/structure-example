import { observable, runInAction } from 'mobx';

import { api } from 'features/Config/api';


interface IConfigStore {
    publicSale: boolean | null;
    blockchainExplorer: string | null;
    blockchainNetwork: string | null;
    keeperABI: string | null;
    keeperAddress: string | null;
    serverTime: string | null;

    fetchConfig: () => Promise<any>;
}

export class ConfigStore implements IConfigStore {
    constructor(private rootStore: any) {
        setTimeout(this.fetchConfig, 0);
    }

    @observable publicSale: boolean | null = null;
    @observable blockchainExplorer: string | null = null;
    @observable blockchainNetwork: string | null = null;
    @observable keeperABI: string | null = null;
    @observable keeperAddress: string | null = null;
    @observable serverTime: string | null = null;
    
    fetchConfig = async () => {
        try {
            const res = await this.rootStore.HTTP.get(api.config.url());

            runInAction(() => {
                this.publicSale = res.body.publicSale;
                this.blockchainExplorer = res.body.blockchainExplorer;
                this.blockchainNetwork = res.body.blockchainNetwork;
                this.keeperABI = res.body.keeperABI;
                this.keeperAddress = res.body.keeperAddress;
                this.serverTime = res.body.serverTime;
            })
            
            return res;
        } catch (err) {
            throw err;
        }
    }
}
