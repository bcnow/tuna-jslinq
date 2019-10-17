export enum JSLinqOrderDirection {
    Ascending, Descending
}

export class JSLinqOrder<T> {
    constructor(public readonly direction: JSLinqOrderDirection, public readonly selector: (item: T) => any) { }
}