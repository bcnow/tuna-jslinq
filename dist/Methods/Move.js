import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Move", function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
});
