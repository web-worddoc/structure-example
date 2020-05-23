import { observable, action, autorun } from 'mobx';
import Cookie from 'js-cookie';


interface ISessionStore {
    start: (token: string) => Promise<any>;
    kill: () => Promise<any>;
    token: string | undefined;
    isActive: boolean | null;
}

export class SessionStore implements ISessionStore {
    constructor() {
        this.observeToken();
    }

    @observable token: string | undefined = Cookie.get('sessionToken');
    @observable isActive: boolean | null = null;

    @action
    start = async (token: string) => {
        this.token = token;
        Cookie.set('sessionToken', token);
    }

    @action
    kill = async () => {
        this.token = undefined;
        Cookie.remove('sessionToken');
    }

    @action
    observeToken = () => {
        autorun(() => {
            if (this.token)
                this.isActive = true;
            else
                this.isActive = false;
        })
    }
}
