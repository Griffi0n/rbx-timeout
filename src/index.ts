export class Timeout {

    constructor(callback: Function, milliseconds: number, ...args: unknown[]) {

        const seconds = milliseconds / 1000

        delay(seconds, () => {

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

export const setTimeout = (callback: Function, milliseconds: number) => {
    
    return new Timeout(callback, milliseconds)

}

export const clearTimeout = (timeout: Timeout) => {

    timeout.clear()

}

export class Interval {

    constructor(callback: Function, milliseconds: number, ...args: unknown[]) {

        const seconds = milliseconds / 1000

        spawn(() => {
            
            while (this.running) {

                wait(seconds)

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

export const setInterval = (callback: Function, milliseconds: number) => {

    return new Interval(callback, milliseconds)

}

export const clearInterval = (interval: Interval) => {

    interval.clear()

}