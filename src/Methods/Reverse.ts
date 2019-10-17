import { JSLinqHelper } from "../JSLinqHelper";

JSLinqHelper.NonEnumerable(Array.prototype, "Reverse",
    function <T>(this: T[]): T[] {
        return this.reverse();
    });