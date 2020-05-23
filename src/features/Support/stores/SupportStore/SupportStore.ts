import { observable, action } from 'mobx';
import { createFormData } from 'og-utils'

import { api } from 'features/Support/api';


type TicketItem = {
    id: number;
    title: string;
    status: string;
    created_at: string;
    updated_at: string;
    rsw_id: number | null;
}

type TicketGET = TicketItem & {
    messages: Message[];
}

type Message = {
    id: number;
    text: string;
    status: 'UNDELIVERED' | string;
    created_at: string;
    from_support: boolean;
    attachments: File[];
    request: number;
    rsw_id: number | null;
}

type TicketPOST = {
    title: string,
    text: string,
    attachments: any[]
}

type MessagePOST = {
    text: string,
    attachments: any[]
}

interface ISupportStore {
    tickets: TicketItem[];
    selectedTicket: TicketGET | null;

    fetchAll: () => Promise<any>;
    fetch: (id: number) => Promise<any>;
    createTicket: (data: TicketPOST) => Promise<any>;
    createMessage: (id: number, data: MessagePOST) => Promise<any>;
    close: (id: number) => Promise<any>;
    renew: (id: number) => Promise<any>;
    unselectTicket: () => Promise<any>;
}

export class SupportStore implements ISupportStore {
    constructor(private rootStore: any) {
        setTimeout(this.fetchAll, 0);
    }

    @observable tickets: TicketItem[] = [];
    @observable selectedTicket: TicketGET | null = null;

    @action
    createTicket = async ({ title, text, attachments }: TicketPOST) => {
        try {
            const res = await this.rootStore.HTTP.post(api.createTicket.url(), {
                title,
                text,
                attachments
            });

            this.fetchAll();
            return res;
        } catch (err) {
            throw err;
        }
    }
    
    createMessage = async (id: number, { text, attachments }: MessagePOST) => {
        try {
            const res = await this.rootStore.HTTP.post(api.createMessage.url(id), createFormData({
                text, attachments
            }));

            this.fetch(id);
            return res;
        } catch (err) {
            throw err;
        }
    }

    @action
    fetchAll = async () => {
        try {
            const res = await this.rootStore.HTTP.get(api.tickets.url())
            this.tickets = res.body;

            return res;
        } catch (err) {
            throw err;
        }
    }
    
    @action
    fetch = async (id: number) => {
        try {
            const res = await this.rootStore.HTTP.get(api.ticket.url(id))
            this.selectedTicket = res.body;

            return res;
        } catch (err) {
            throw err;
        }
    }
    
    close = async (id: number) => { }
    
    renew = async (id: number) => { }

    @action
    unselectTicket = async () => {
        this.selectedTicket = null
    }
}
