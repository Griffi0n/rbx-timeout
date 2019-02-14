import { milliWait } from "rbx-wait"

export class Timeout {

    constructor(callback: Function, milliseconds: number, ...args: unknown[]) {

        spawn(() => {

            milliWait(milliseconds)

            if (this.running) {

                callback(...args)

            }

        })

    }

    running = true
    
    clear(): void {

        this.running = false

    }

}

export const setTimeout = (callback: Function, milliseconds: number, ...args: unknown[]) => {
    
    return new Timeout(callback, milliseconds, ...args)

}

export const clearTimeout = (timeout: Timeout) => {

    timeout.clear()

}

export class Interval {

    constructor(callback: Function, milliseconds: number, ...args: unknown[]) {

        const seconds = milliseconds / 1000

        spawn(() => {
            
            while (this.running) {

                milliWait(milliseconds)

                if (this.running) {

                    callback(...args)

                }

            }

        })

    }

    running = true

    clear(): void {

        this.running = false

    }

}

export const setInterval = (callback: Function, milliseconds: number, ...args: unknown[]) => {

    return new Interval(callback, milliseconds, ...args)

}

export const clearInterval = (interval: Interval) => {

    interval.clear()

}