import { Request, Response } from 'superagent';

import { SessionStore } from 'features/Session';

export interface Client {
    get: (url: string, data?: any) => Request;
    post: (url: string, data?: any) => Request;
    patch: (url: string, data?: any) => Request;
    put: (url: string, data?: any) => Request;
    del: (url: string, data?: any) => Request;
}

export interface IHTTP {
    get: (url: string) => Promise<any>;
    post: (url: string, data?: any) => Promise<any>;
    patch: (url: string, data: any) => Promise<any>;
    put: (url: string, data: any) => Promise<any>;
    delete: (url: string, data?: any) => Promise<any>;
}

type Env = {
    rootStore: any,
    client: Client
}

export class HTTP implements IHTTP {
    constructor(private env: Env) {

    }

    get = (url: string, data?: object) => {
        return new Promise((resolve, reject) => {
            this.env.client
                .get(url, data)
                .use(this.pluginToken)
                .end(this.handleEnd(resolve, reject));
        });
    }

    post = (url: string, data?: object) => {
        return new Promise((resolve, reject) => {
            this.env.client
                .post(url, data)
                .use(this.pluginToken)
                .end(this.handleEnd(resolve, reject));
        });
    }

    put = (url: string, data: object) => {
        return new Promise((resolve, reject) => {
            this.env.client
                .put(url, data)
                .use(this.pluginToken)
                .end(this.handleEnd(resolve, reject));
        });
    }

    patch = (url: string, data: object) => {
        return new Promise((resolve, reject) => {
            this.env.client
                .patch(url, data)
                .use(this.pluginToken)
                .end(this.handleEnd(resolve, reject));
        });
    }

    delete = (url: string, data?: object) => {
        return new Promise((resolve, reject) => {
            this.env.client
                .del(url, data)
                .use(this.pluginToken)
                .end(this.handleEnd(resolve, reject));
        });
    }

    handleEnd = (resolve: Function, reject: Function) => (err: any, res: Response) => {
        if (err)
            reject(res)
        else
            resolve(res);
    }

    pluginToken = (req: Request) => {
        const token = this.env.rootStore.Session.token;

        if (token) {
            req.set('Authorization', `JWT ${this.env.rootStore.Session.token}`);
        }
    }
}
