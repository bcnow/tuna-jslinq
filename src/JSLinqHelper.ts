export class JSLinqHelper {

    public static NonEnumerable<T>(instance: T, name: keyof T, value: any) {
        Object.defineProperty(instance, name, {
            value: value,
            enumerable: false,
            configurable: true
        });
    }

    public static OrderCompareFunction<T>(valueSelector: (item: T) => any, a: T, b: T, invert: boolean): number {
        const value_a: any = valueSelector(a);
        const value_b: any = valueSelector(b);

        const type_a: string = typeof value_a;
        const type_b: string = typeof value_b;

        if (type_a === "string" && type_a === type_b) {
            let value_a_string: string = value_a;
            value_a_string = value_a_string.toLowerCase();
            let value_b_string: string = value_b;
            value_b_string = value_b_string.toLowerCase();

            if (value_a_string > value_b_string) {
                return invert === true ? -1 : 1;
            } else if (value_a_string < value_b_string) {
                return invert === true ? 1 : -1;
            } else {
                return 0;
            }

        } else if (type_a === "number" && type_a === type_b) {
            const value_a_number: number = value_a;
            const value_b_number: number = value_b;

            return invert === true ? value_b_number - value_a_number : value_a_number - value_b_number;
        } else if (type_a === "boolean" && type_a === type_b) {
            const value_a_bool: boolean = value_a;
            const value_b_bool: boolean = value_b;

            if (value_a_bool === value_b_bool) {
                return 0;
            } else {
                if (invert === true) {
                    return value_a_bool ? 1 : -1;
                } else {
                    return value_a_bool ? -1 : 1;
                }
            }
        } else {
            if (type_a === "undefined" && type_a === type_b) {
                return 0;
            } else if (type_a === "undefined") {
                return invert ? 1 : -1;
            } else if (type_b === "undefined") {
                return invert ? -1 : 1;
            }

            return 0;
        }
    }
}