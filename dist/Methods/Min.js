import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Min", function (selector) {
    var fn = selector || function (item) { return item; };
    return this.OrderBy(fn).FirstOrDefault();
});
