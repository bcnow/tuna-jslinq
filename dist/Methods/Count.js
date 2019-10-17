import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Count", function (selector) {
    return !selector ? this.length : this.Where(selector).length;
});
