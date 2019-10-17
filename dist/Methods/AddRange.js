import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "AddRange", function (items) {
    var _this = this;
    items.ForEach(function (f) { return _this.push(f); });
    return this;
});
