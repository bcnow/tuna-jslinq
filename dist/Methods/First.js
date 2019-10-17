import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "First", function (selector) {
    var result = this.FirstOrDefault(selector);
    if (result)
        return result;
    throw new Error("Tuna-JSLinq: The First Entry was not found");
});
