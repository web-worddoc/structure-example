import { observable, computed, action } from 'mobx';
import Web3 from 'web3';
import { detect } from 'detect-browser';


interface IWeb3Store {
    isProviderInjected: boolean | null;
    isProviderUnlocked: boolean | null;
    isProviderReady: boolean | null;
    isNetworkCorrect: boolean | null;
    isSupported: boolean;
    selectedAddress: string | null;
    isInited: boolean;

    unlockProvider: () => Promise<any>;
}

export class Web3Store implements IWeb3Store {
    constructor() {
        this.triggerInit();
    }

    private updateInterval: number | null = null;
    @observable web3Instance: any | null = null;
    @observable isProviderInjected: boolean | null = null;
    @observable isProviderUnlocked: boolean | null = null;
    @observable isNetworkCorrect: boolean | null = null;
    @observable selectedAddress: string | null = null;
    
    @computed get isProviderReady() {
        return this.isProviderInjected && this.isProviderUnlocked;
    }

    @computed get isSupported() {
        let browser = detect();

        switch (browser?.name) {
            case 'chrome':
            case 'opera':
            case 'firefox':
                return true;
            default:
                return false;
        }
    }

    @computed get isInited() {
        return !!this.web3Instance;
    }

    @action
    private async updateSelectedAddr() {
        if (!this.web3Instance)
            this.selectedAddress = null;
        
        let addr = (await this.getAccounts())[0];

        if (addr)
            this.selectedAddress = this.web3Instance.utils.toChecksumAddress(addr);
        else
            this.selectedAddress = null;
    };

    private async getAccounts() {
        return await this.web3Instance.eth.getAccounts();
    }

    private startUpdate(ms: number) {
        this.updateInterval = setInterval(async() => {
            this.updateSelectedAddr();
            this.isProviderInjected = !!window.ethereum;

            if (window.ethereum ?._metamask ?.isUnlocked()) {
                this.isProviderUnlocked = await window.ethereum._metamask.isUnlocked()
            }
        }, ms);
    }

    private finishUpdate() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
    }

    @action
    private init = async () => {
        let proxyInstance = undefined;

        if (window.ethereum) {
            // Modern browser
            proxyInstance = new Web3(window.ethereum);
        } else if (window.web3 && window.web3.currentProvider) {
            // Old browser
            proxyInstance = new Web3(window.web3.currentProvider);
        }

        // Was web3 instantiated? Is it a sane enviroment?
        if (proxyInstance) {
            this.web3Instance = proxyInstance;
            this.unlockProvider();
            return proxyInstance;
        } else {
            throw new Error('Web3 is not supported! Use another browser or install metamask.');
        }
    }

    private triggerInit = () => {
        window.addEventListener('load', async () => {
            try {
                await this.init();
                this.startUpdate(500);
            } catch (err) {
                setTimeout(async () => {
                    try {
                        await this.init();
                    } catch {}
                },500);
            }
        })
    }

    unlockProvider = async () => {
        if (this.web3Instance?.givenProvider?.enable) {
          return await this.web3Instance?.givenProvider.enable();
        }
    }
}
