import { api } from 'features/Auth/api';


interface IAuthStore {
    login: (email: string, password: string) => Promise<any>;
    register: (email: string, language: string) => Promise<any>;
    logout: () => Promise<any>;
    completeRegistry: (password: string, language: string) => Promise<any>;
    recover: (email: string) => Promise<any>;
    setNewPassword: (password: string, confirm: string, token: string, uid: string) => Promise<any>;
}

export class AuthStore implements IAuthStore {
    constructor(private rootStore: any) {};

    login = async (email: string, password: string) => {
        return this.rootStore.HTTP.post(api.login.url(), {
            email,
            password
        }).then((res: any) => {
            this.rootStore.Session.start(res.body.token);
        });
    }

    register = (email: string, language: string) => {
        return this.rootStore.HTTP.post(api.register.url(), {
            email,
            language
        });
    }

    logout = async () => {
        return this.rootStore.HTTP.post(api.logout.url())
            .then(() => {
                this.rootStore.Session.kill();
            });
    }

    completeRegistry = async (password: string, language: string) => {
        return this.rootStore.HTTP.put(api.completeRegistry.url(), {
            password,
            language
        });
    }

    recover = async (email: string) => {
        return this.rootStore.HTTP.post(api.recover.url(), {
            email,
        });
    }

    setNewPassword = async (password: string, confirm: string, token: string, uid: string) => {
        return this.rootStore.HTTP.post(api.recover.url(), {
            password,
            confirm,
            token,
            uid
        });
    }
}
