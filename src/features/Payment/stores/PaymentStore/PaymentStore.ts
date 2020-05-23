import { observable, action } from 'mobx';


interface IPaymentStore {

}

export class PaymentStore implements IPaymentStore {
    constructor(private rootStore: any) {}
}
