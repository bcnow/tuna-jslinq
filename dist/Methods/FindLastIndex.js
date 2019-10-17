import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "FindLastIndex", function (selector) {
    if (!selector)
        throw new Error("Tuna-JSLinq: You must define a selector");
    var i = this.length;
    while (i--) {
        if (selector(this[i], i) === true)
            return i;
    }
    return -1;
});
