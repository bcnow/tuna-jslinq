import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "SelectMany", function (selector) {
    var result = new Array();
    this.ForEach(function (item, index) {
        var items = selector(item, index) || [];
        result.AddRange(items);
    });
    return result;
});
