import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "FirstOrDefault", function (selector) {
    if (!selector)
        return this.length > 0 ? this[0] : null;
    var result = null;
    this.ForEach(function (item, index) {
        var match = selector(item, index) === true;
        if (match)
            result = item;
        return match;
    });
    return result;
});
