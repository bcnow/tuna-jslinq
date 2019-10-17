export declare enum JSLinqOrderDirection {
    Ascending = 0,
    Descending = 1
}
export declare class JSLinqOrder<T> {
    readonly direction: JSLinqOrderDirection;
    readonly selector: (item: T) => any;
    constructor(direction: JSLinqOrderDirection, selector: (item: T) => any);
}
