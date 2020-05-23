import { observable, computed, action, autorun } from 'mobx';

import { Calculator } from './../../lib';
import { MIN_INVEST, MAX_INVEST, BONUS_MAP } from 'core';


const calculator = new Calculator(10, BONUS_MAP);

interface ICalculationStore {
  investedCrypto: number;
  investedFiat: number;
  bonusPercent: number;
  bonusTokens: number;
  totalWithoutBonus: number;
  total: number;

  setInvestedCrypto: (amount: number) => void;
  setInvestedFiat: (amount: number) => void;
}

export class CalculationStore implements ICalculationStore {
  constructor(private rootStore: any) {
    this.observeRate();
  }

  @observable investedCrypto: number = 1;
  @observable investedFiat: number = MIN_INVEST;
  @observable bonusPercent: number = 0;
  @observable bonusTokens: number = 0;
  @observable totalWithoutBonus: number = 0;
  @observable total: number = 0;
  @observable lastChanged: 'fiat' | 'crypto' = 'fiat';

  @computed private get rate() : number | null {
    return this.rootStore.Currency.rate;
  };

  @action
  setInvestedCrypto = (amount: number) => {
    this.investedCrypto = amount;
    this.lastChanged = 'crypto';

    if (this.rate) {
      this.syncAmounts(this.rate);
    }
  }
  
  @action
  setInvestedFiat = (amount: number) => {
    this.investedFiat = amount;
    this.lastChanged = 'fiat';

    if (this.rate) {
      this.syncAmounts(this.rate);
    }
  }

  @action
  syncAmounts = (rate: number) => {
    if (this.lastChanged === 'fiat') {
      this.investedCrypto = +calculator.fiatToCrypto(this.investedFiat, rate).toFixed(5);
    } else if (this.lastChanged === 'crypto') {
      this.investedFiat = +calculator.cryptoToFiat(this.investedCrypto, rate).toFixed(5);
    }
    this.bonusPercent = calculator.getBonusPercents(this.investedFiat);
    this.bonusTokens = +calculator.getBonusTokens(this.investedFiat).toFixed(5);
    this.totalWithoutBonus = +calculator.getTotalWithoutBonus(this.investedFiat).toFixed(5);
    this.total = +calculator.getTotal(this.investedFiat).toFixed(5);
  }

  observeRate = () => {
    autorun(() => {
      if (this.rate) {
        this.syncAmounts(this.rate);
      }
    })
  } 
}
