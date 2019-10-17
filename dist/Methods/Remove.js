import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Remove", function (item) {
    var index = this.indexOf(item);
    if (index > -1)
        this.RemoveAt(index);
    return this;
});
