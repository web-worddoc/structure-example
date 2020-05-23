type BonusCheckpoint = {
  from: number;
  value: number;
  to?: number;
}


interface ICalculator {
  basePrice: number;
  bonusMap: BonusCheckpoint[];

  fiatToCrypto: (amount: number, rate: number) => number;
  cryptoToFiat: (amount: number, rate: number) => number;
  getBonusTokens: (fiat: number) => number;
  getBonusPercents: (fiat: number) => number;
  getTotalWithoutBonus: (fiat: number) => number;
  getTotal: (fiat: number) => number;
}

export class Calculator implements ICalculator {
  constructor(public basePrice: number, public bonusMap: BonusCheckpoint[]) {}

  fiatToCrypto = (amount: number, rate: number) => {
    if (rate === 0)
      return amount;
    else
      return amount / rate;
  };

  cryptoToFiat = (amount: number, rate: number) => {
    if (rate === 0)
      return amount;
    else
      return amount * rate || amount;
  };

  getBonusTokens = (fiat: number) => {
    const bonus = this.getBonusPercents(fiat);

    if (bonus < 0)
      return 0;
    else
      return bonus / 100 * fiat / this.basePrice;
  };

  getBonusPercents = (fiat: number) => {
    let res = 0;

    for (let i = 0, l = this.bonusMap.length; i < l; i++) {
      if (!this.bonusMap[i].to && fiat >= this.bonusMap[i].from) {
        res = this.bonusMap[i].value;
        break;
      }
      if (fiat >= this.bonusMap[i].from && fiat < (this.bonusMap[i].to || Infinity)) {
        res = this.bonusMap[i].value;
        break;
      }
    }

    return res;
  };

  getTotalWithoutBonus = (fiat: number) => {
    return fiat / this.basePrice;
  };

  getTotal = (fiat: number) => {
    return fiat / this.basePrice + this.getBonusTokens(fiat);
  }
}
