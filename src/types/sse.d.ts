interface Callback { (data: any): void; }

declare class EventSource {
    onmessage: Callback;
    addEventListener(event: string, callback: Callback): void;
    constructor(name: string);
}
