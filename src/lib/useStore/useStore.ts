import * as React from 'react';
import superagent from 'superagent';

import { HTTP } from 'core';
import { AuthStore as Auth } from 'features/Auth';
import { AccountStore as Account } from 'features/Account';
import { CrowdsaleStore as Crowdsale } from 'features/Crowdsale';
import { TxnStore as Txn } from 'features/Transactions';
import { Web3Store as Web3 } from 'features/Web3';
import { PaymentStore as Payment } from 'features/Payment';
import { CalculationStore as Calculation } from 'features/Payment/features/Calculation';
import { CurrencyStore as Currency } from 'features/Payment/features/Calculation';
import { OrderStore as Order } from 'features/Payment/features/Order';
import { SupportStore as Support } from 'features/Support';
import { KeeperStore as Keeper } from 'features/Keeper';
import { ConfigStore as Config } from 'features/Config';
import { SessionStore as Session } from 'features/Session';


class RootStore {
  Session = new Session();
  Config = new Config(this);
  Web3 = new Web3();
  Auth = new Auth(this);
  Account = new Account(this);
  Crowdsale = new Crowdsale(this);
  Payment = new Payment(this);
  Currency = new Currency(this);
  Calculation = new Calculation(this);
  Order = new Order(this);
  Txn = new Txn(this);
  Support = new Support(this);
  Keeper = new Keeper(this);
  HTTP = new HTTP({ rootStore: this, client: superagent });
}

const RootContext = React.createContext(new RootStore());
export const useStore = () => React.useContext(RootContext);
