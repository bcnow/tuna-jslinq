import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Insert", function (item, index) {
    this.splice(index, 0, item);
    return this;
});
