import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Repeat", function (item, count) {
    for (var i = 0; i < count; i++) {
        this.Add(item);
    }
    return this;
});
