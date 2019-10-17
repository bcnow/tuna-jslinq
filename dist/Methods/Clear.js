import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Clear", function () {
    this.length = 0;
    return this;
});
