import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "GroupBy", function (selector) {
    return this.reduce(function (groups, item) {
        var value = selector ? selector(item) : item;
        groups[value] = groups[value] || [];
        groups[value].push(item);
        return groups;
    }, {});
});
