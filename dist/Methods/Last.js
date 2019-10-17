import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Last", function (selector) {
    var result = this.LastOrDefault(selector);
    if (result)
        return result;
    throw new Error("Tuna-JSLinq: The Last Entry was not found");
});
