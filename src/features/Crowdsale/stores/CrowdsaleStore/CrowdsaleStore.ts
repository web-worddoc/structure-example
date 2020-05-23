import { observable, computed, action } from 'mobx';

import { api } from 'features/Crowdsale/api';

    
type Phase = {
    id: number;
    basePrice: number;
    upperBound: number;
    isActive: boolean;
}

interface ICrowdsaleStore {
    basePrice: number | null;
    fundsRaised: number;
    currentPhaseID: number | null;
    currentPhase: Phase | null;
    phases: Phase[];
    startTime: string;
    endTime: string;
    tokenDecimals: number;
    minInvestedUSD: number;
    maxInvestedUSD: number;
    fetch: () => Promise<any>
}

export class CrowdsaleStore implements ICrowdsaleStore {
    constructor(private rootStore: any) {
        setTimeout(() => {
            this.fetch()
        }, 0)
    }

    @observable basePrice: number | null = null;
    @observable fundsRaised: number = 0;
    @observable currentPhaseID: number | null = null;
    @observable phases: Phase[] = [];
    @observable startTime: string = '2018-08-29T15:10:47+00:00';
    @observable endTime: string = '2018-12-09T15:10:47+00:00';
    @observable tokenDecimals: number = 8;
    @observable minInvestedUSD: number = 10;
    @observable maxInvestedUSD: number = 1000000;

    @computed get currentPhase(): Phase | null {
        if (this.currentPhaseID !== null && this.phases.length) {
            return this.phases.find(el => el.id === this.currentPhaseID) || null; 
        } else {
            return null;
        }
    }

    @action
    fetch = async () => {
        const res = await this.rootStore.HTTP.get(api.crowdsale.url());

        this.basePrice = res.body.currentBasePrice;
        this.fundsRaised = res.body.fundsRaised;
        this.currentPhaseID = res.body.currentPhase;
        this.phases = res.body.phases.map((el: Phase, i: number) => {
            el.id = i;
            if (res.body.currentPhase === el.id)
                el.isActive = true;
            else
                el.isActive = false;

            return el;
        });

        return res;
    }
}
