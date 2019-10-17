import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "RemoveAt", function (index) {
    this.splice(index, 1);
    return this;
});
