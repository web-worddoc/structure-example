import { Recipient } from 'features/Payment/features/Order';
import { observable, autorun, runInAction } from 'mobx';



interface IKeeperStore {
    startUnfreezingDate: string | null;
    totalUnfreezingDate: string | null;
    unfrozenBalance: number | null;
    balance: number | null;
    fetched: boolean;
    
    withdraw: (recipient: string, amount: number) => Promise<any>;
}

export class KeeperStore implements IKeeperStore {
    constructor(private rootStore: any) {
        setTimeout(() => {
            this.syncData();
            this.syncContract();
        }, 1500);
    }
    @observable private contract: any | null = null;
    @observable startUnfreezingDate: string | null = null;
    @observable totalUnfreezingDate: string | null = null;
    @observable unfrozenBalance: number | null = null;
    @observable balance: number | null = null;
    @observable fetched: boolean = false;

    withdraw = async (recipient: string, amount: number) => {
        return await this.contract.methods.withdraw(recipient, amount).send();
    }

    syncData = () => {
        autorun(async () => {
            if (this.contract) {
                const data = await Promise.all([
                    this.contract.methods.unFreezeStartDate().call(),
                    this.contract.methods.totalUnFreezeDate().call(),
                    this.contract.methods.getUnfrozenAmount(this.contract.options.from).call(),
                    this.contract.methods.balances(this.contract.options.from).call(),
                ]);

                runInAction(() => {
                    this.startUnfreezingDate = new Date(Number(data[0] * 1000)).toUTCString();
                    this.totalUnfreezingDate = new Date(Number(data[1] * 1000)).toUTCString();
                    this.unfrozenBalance = Number(data[2]);
                    this.balance = Number(data[3]);
                    this.fetched = true;
                })
            }
        })
    }

    syncContract = () => {
        autorun(() => {
            if (
                this.rootStore.Config.keeperABI &&
                this.rootStore.Config.keeperAddress &&
                this.rootStore.Web3.web3Instance &&
                this.rootStore.Web3.selectedAddress
            ) {
                this.contract = new this.rootStore.Web3.web3Instance.eth.Contract(
                    this.rootStore.Config.keeperABI,
                    this.rootStore.Config.keeperAddress,
                    {
                        from: this.rootStore.Web3.selectedAddress
                    }
                );
            }
        })
    }
}
