import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Sum", function (selector) {
    var result = 0;
    var fn = selector || function (item) { return item; };
    this.ForEach(function (x) {
        result += fn(x);
    });
    return result;
});
