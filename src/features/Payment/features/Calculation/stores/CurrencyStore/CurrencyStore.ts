import { observable, action, reaction } from 'mobx';

import { api } from 'features/Payment/features/Calculation/api';


type Currency = {
  id: number;
  name: string;
  code: string;
  active: boolean;
}

interface ICurrencyStore {
  all: Currency[];
  selected: Currency | null;

  setSelected: (id: number) => void;
  fetch: () => Promise<Currency[]>
  fetchRate: (code: string) => Promise<any>;
}

export class CurrencyStore implements ICurrencyStore {
  constructor(private rootStore: any) {
    setTimeout(this.fetch, 0);
    this.observeSelected();
  }
  
  @observable all: Currency[] = [];
  @observable selected: Currency | null = null;
  @observable rate: number | null = null

  @action
  fetch = async () => {
    try {
      const res = await this.rootStore.HTTP.get(api.currencies.url());

      this.all = res.body.map((el: Currency, i: number) => {
        el.id = i + 1;
        return el;
      });
      return res;
    } catch (err) {
      throw err;
    }
  }

  @action
  fetchRate = async (code: string) => {
    try {
      const res = await this.rootStore.HTTP.get(api.rate.url(code));
      this.rate = res.body.rate;
      return res;
    } catch (err) {
      throw err;
    }
  }

  @action
  setSelected = (id: number) => {
    this.selected = this.all.find(el => el.id === id) || null;
  }

  observeSelected = () => {
    reaction(
      () => this.selected,
      (selected: Currency | null) => {
        this.rate = null;
        if (selected) {
          this.fetchRate(selected.code.toLowerCase());
        }
      }
    )
  }
}
