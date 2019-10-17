import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "LastOrDefault", function (selector) {
    if (!selector)
        return this.length > 0 ? this[this.length - 1] : null;
    var result = null;
    var i = this.length;
    while (i--) {
        var item = this[i];
        if (selector(item, i) === true) {
            result = item;
            break;
        }
    }
    return result;
});
