import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Range", function (start, length) {
    return this.Skip(start).Take(length);
});
