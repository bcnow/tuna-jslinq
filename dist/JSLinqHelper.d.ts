export declare class JSLinqHelper {
    static NonEnumerable<T>(instance: T, name: keyof T, value: any): void;
    static OrderCompareFunction<T>(valueSelector: (item: T) => any, a: T, b: T, invert: boolean): number;
}
