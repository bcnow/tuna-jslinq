import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "FindIndex", function (selector) {
    if (!selector)
        throw new Error("Tuna-JSLinq: You must define a selector");
    var result = -1;
    this.ForEach(function (item, index) {
        var match = selector(item, index) === true;
        if (match) {
            result = index;
        }
        return match;
    });
    return result;
});
