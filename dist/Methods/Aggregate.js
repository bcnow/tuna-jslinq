import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Aggregate", function (accumulator, initialValue) {
    return this.reduce(accumulator, initialValue);
});
