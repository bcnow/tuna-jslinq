import { JSLinqHelper } from "../JSLinqHelper";

JSLinqHelper.NonEnumerable(Array.prototype, "Union",
    function <T>(this: T[], array: T[]): T[] {
        return this.Concat(array).Distinct();
    });