import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "SingleOrDefault", function (selector) {
    return this.Any(selector) ? this.Single(selector) : null;
});
