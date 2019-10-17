import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Union", function (array) {
    return this.Concat(array).Distinct();
});
