import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Max", function (selector) {
    var fn = selector || function (item) { return item; };
    return this.OrderBy(fn).LastOrDefault();
});
