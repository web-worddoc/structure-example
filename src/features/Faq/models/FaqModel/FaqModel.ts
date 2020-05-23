import { observable, action } from 'mobx';

import { HTTP, IHTTP } from 'core';


interface IFaqModel {
    all: any[];
    fetchAll: () => Promise<any>;
}

export class FaqModel implements IFaqModel {
    constructor(private HTTP: IHTTP) { }

    @observable all: any[] = [];

    fetchAll = async () => { }
}
