import { observable, action } from 'mobx';

import { HTTP, IHTTP } from 'core';


type Lang = {
    short: string,
    full: string,
}

interface ILanguageModel {
    current: string,
    default: string,
    supported: Lang[],
    setLanguage: (lang: string) => Promise<any>;
}

export class LanguageModel implements ILanguageModel {
    constructor(private HTTP: IHTTP) { }
    @observable current: string = 'en';
    default: string = 'en';
    supported: Lang[] = [
        {
            short: 'en',
            full: 'English',
        },
        {
            short: 'ru',
            full: 'Russian',
        },
    ];

    @action
    setLanguage = async (lang: string) => {
        this.current = lang;
    }
}
