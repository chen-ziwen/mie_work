
// export function debounce(fun: Function, delay: number) {
//     let tiemout: NodeJS.Timeout;
//     let arg = Array.from(arguments);
//     return function (this: any, ...args: any[]) {
//         clearTimeout(tiemout);
//         tiemout = setTimeout(() => {
//             fun.apply(this, arg)
//         })
//     }


// }

// 完整版写法
export class Debounce {
    public use: (fun: Function, delay: number, immediate: boolean) => Function;
    constructor() {
        this.use = (fun, delay, immediate = false) => {
            let tiemout: NodeJS.Timeout | undefined = undefined;
            return (...args: any) => {
                if (immediate) {
                    fun.apply(this, args);
                    immediate = false;
                    return;
                }
                clearTimeout(tiemout);
                tiemout = setTimeout(() => {
                    fun.apply(this, args);
                }, delay)
            }
        }
    }
}
// 可以这么简写
export class Debounce2 {
    public use = (fun: Function, delay: number): Function => {
        let tiemout: NodeJS.Timeout | undefined = undefined;
        return (...args: any) => {
            clearTimeout(tiemout);
            tiemout = setTimeout(() => {
                fun.apply(this, args);
            }, delay)
        }
    }
}





