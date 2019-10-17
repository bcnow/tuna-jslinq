import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "RemoveRange", function (start, length) {
    var _this = this;
    this.Skip(start).Take(length).ForEach(function (f) { return _this.Remove(f); });
    return this;
});
