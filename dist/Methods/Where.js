import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Where", function (selector) {
    if (!selector)
        throw new Error("Tuna-JSLinq: You must define a selector");
    var result = new Array();
    this.ForEach(function (item, index) {
        if (selector(item, index) === true) {
            result.push(item);
        }
    });
    return result;
});
