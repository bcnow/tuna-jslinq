import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Distinct", function (selector) {
    var result = new Array();
    var groups = this.GroupBy(selector);
    for (var name_1 in groups) {
        var items = groups[name_1];
        if (items.Any())
            result.Add(items[0]);
    }
    return result;
});
