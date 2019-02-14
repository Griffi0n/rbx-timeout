# rbx-timeout
setTimeout and setInterval for roblox-ts.

## Examples

### Using rbx-timeout with setTimeout
```ts
import { setTimeout } from "rbx-timeout"
const timeout = setTimeout(() => {
    print("This will print in 1000 milliseconds (1 second).")
}, 1000)
```

### Using rbx-timeout with clearTimeout
```ts
import { setTimeout, clearTimeout } from "rbx-timeout"
const timeout = setTimeout(() => {
    print("This will NOT print in 1000 milliseconds (1 second).")
}, 1000)
clearTimeout(timeout)
```

### Using rbx-timeout with setInterval
```ts
import { setInterval } from "rbx-timeout"
const interval = setInterval(() => {
    print("This will continue to print every 1000 milliseconds.")
}, 1000)
```

### Using rbx-timeout with clearInterval
```ts
import { setInterval, clearInterval } from "rbx-timeout"
const interval = setInterval(() => {
    print("This is now functionally equivalent to setTimeout.")
    clearInterval(interval)
}, 1000)
```

### Using rbx-timeout with classes
```ts
import { Timeout } from "rbx-timeout"
const timeout = new Timeout(() => {
    print("This will not print")
}, 1000) // equivalent to setTimeout
timeout.clear() // equivalent to clearTimeout
```
```ts
import { Interval } from "rbx-timeout"
const interval = new Interval(() => {
    print("This will not print")
}, 1000) // equivalent to setInterval
interval.clear() // equivalent to clearInterval
```