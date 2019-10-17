import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Any", function (selector) {
    if (!selector)
        return this.length > 0;
    var result = false;
    this.ForEach(function (item, index) { return result = selector(item, index) === true; });
    return result;
});
