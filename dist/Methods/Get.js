import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Get", function (index) {
    var result = this[index];
    return result === undefined ? null : result;
});
