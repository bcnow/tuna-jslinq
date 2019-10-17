import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Add", function (item) {
    this.push(item);
    return this;
});
