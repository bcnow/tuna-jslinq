import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Take", function (count) {
    return this.slice(0, count);
});
