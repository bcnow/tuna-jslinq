import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "All", function (selector) {
    return this.Count(selector) === this.Count();
});
