import { JSLinqHelper } from "../JSLinqHelper";

JSLinqHelper.NonEnumerable(Array.prototype, "Single",
    function <T>(this: T[], selector?: (item: T, index: number) => boolean): T {
        const result = selector ? this.Where(selector) : this;

        if (result.Count() !== 1) {
            throw new Error("Tuna-JSLinq: The array does not contain exactly one element");
        }

        return result.First();
    });