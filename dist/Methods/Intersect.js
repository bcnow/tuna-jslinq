import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Intersect", function (array) {
    return this.Where(function (x) { return array.Contains(x); });
});
