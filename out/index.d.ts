/// <reference types="rbx-types" />
export declare class Timeout {
    constructor(callback: Function, milliseconds: number);
    running: boolean;
    clear(): void;
}
export declare const setTimeout: (callback: Function, milliseconds: number) => Timeout;
export declare const clearTimeout: (timeout: Timeout) => void;
export declare class Interval {
    constructor(callback: Function, milliseconds: number);
    running: boolean;
    clear(): void;
}
export declare const setInterval: (callback: Function, milliseconds: number) => Interval;
export declare const clearInterval: (interval: Interval) => void;
