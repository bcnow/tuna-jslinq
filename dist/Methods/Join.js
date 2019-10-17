import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Join", function (char, selector) {
    var result = this;
    if (selector)
        result = this.Select(selector);
    return result.join(char);
});
