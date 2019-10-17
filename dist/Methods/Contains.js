import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Contains", function (item) {
    return this.Any(function (a) { return a === item; });
});
