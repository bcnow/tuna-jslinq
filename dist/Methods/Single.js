import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Single", function (selector) {
    var result = selector ? this.Where(selector) : this;
    if (result.Count() !== 1) {
        throw new Error("Tuna-JSLinq: The array does not contain exactly one element");
    }
    return result.First();
});
