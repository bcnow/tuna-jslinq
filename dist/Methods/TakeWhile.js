import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "TakeWhile", function (selector) {
    var result = [];
    var length = this.length;
    var i = 0;
    while (i < length && selector(this[i], i) === true) {
        result.push(this[i++]);
    }
    return result;
});
