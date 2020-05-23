import { observable, action, computed, autorun } from 'mobx';

import { USER_STATUS_NOT_AUTH, USER_STATUS_TOKENS_DELIVERED } from 'core';
import { api } from 'features/Account/api';

interface IAccountStore {
    email: string | null;
    language: string | null;
    ethAddr: string | null;
    status: string | null;
    maxInvitees: number | null;
    uniqueCode: string | null;
    referrals: string[];
    isSimpleUser: boolean | null;
    balances: Balances;
    totalBalance: number;
    canInvest: boolean | null;

    fetch: () => Promise<any>;
    changeEmail: (email: string) => Promise<any>;
    changePassword: (oldPassword: string, password: string, confirm: string) => Promise<any>;
    setEthAddress: (address: string) => Promise<any>;
}

type Balances = {
    account_tokens: number,
    bought_tokens: number,
    keepers_tokens: number,
    rsw_tokens: number,
}

export class AccountStore implements IAccountStore {
    constructor(private rootStore: any) {
        this.observeSession();
        setTimeout(() => {
            this.fetch()
        }, 0)
    }

    @observable email: string | null = null;
    @observable language: string | null = null;
    @observable ethAddr: string | null = null;
    @observable status: string | null = null;
    @observable uniqueCode: string | null = null;
    @observable maxInvitees: number | null = null;
    @observable referrals: string[] = [];
    @observable isSimpleUser: boolean | null = null;
    @observable balances: Balances = {
        account_tokens: 0,
        bought_tokens: 0,
        keepers_tokens: 0,
        rsw_tokens: 0,
    };

    @computed get totalBalance(): number {
        return Object.values(this.balances).reduce((acc, c) => acc += c, 0);
    }

    @computed get canInvest(): boolean | null {
        if (this.status === null)
            return null;
        else if (this.status === USER_STATUS_TOKENS_DELIVERED)
            return true;
        else
            return false;
    }

    @action
    fetch = async () => {
        return this.rootStore.HTTP.get(api.user.url())
            .then((res: any) => {
                this.email = res.body.email;
                this.language = res.body.language;
                this.ethAddr = res.body.eth_addr;
                this.status = res.body.status;
                this.isSimpleUser = res.body.is_simple_user;
                this.maxInvitees = res.body.max_invitees;
                this.referrals = res.body.referrals;
                this.uniqueCode = res.body.unique_code;
                this.balances.account_tokens = res.body.balance.account_tokens;
                this.balances.rsw_tokens = res.body.balance.rsw_tokens;
                this.balances.keepers_tokens = res.body.balance.keepers_tokens;
                this.balances.bought_tokens = res.body.balance.bought_tokens;
            })
            .catch(() => {
                this.status = USER_STATUS_NOT_AUTH;
            })

    }

    @action
    changeEmail = async (email: string) => { }

    @action
    changePassword = (oldPassword: string, newPassword: string, confirmedPassword: string) => {
        return this.rootStore.HTTP.patch(api.user.url(), {
            oldPassword,
            newPassword,
            confirmedPassword
        });
    }

    @action
    setEthAddress = async (address: string) => {
        try {
            const res = await this.rootStore.HTTP.patch(api.user.url(), {
                eth_addr: address
            })

            this.status = res.body.status;
            this.ethAddr = res.body.eth_addr;

            return res;
        } catch (err) {
            throw err;
        }
    }

    @action
    clearUser = () => {
        this.email = null;
        this.language = null;
        this.ethAddr = null;
        this.status = USER_STATUS_NOT_AUTH;
        this.uniqueCode = null;
        this.maxInvitees = null;
        this.referrals = [];
        this.isSimpleUser = null;
        this.balances = {
            account_tokens: 0,
            bought_tokens: 0,
            keepers_tokens: 0,
            rsw_tokens: 0,
        };
    }

    observeSession = () => {
        autorun(() => {
            if (!this.rootStore.Session.isActive) {
                this.clearUser();
            }
        })
    }
        
}
