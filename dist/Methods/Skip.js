import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Skip", function (count) {
    return this.slice(count, this.Count());
});
