import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Average", function (selector) {
    return this.Sum(selector) / this.Count();
});
