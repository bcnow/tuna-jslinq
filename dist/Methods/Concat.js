import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Concat", function (array) {
    return this.concat(array);
});
