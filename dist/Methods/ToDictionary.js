import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "ToDictionary", function (keySelector, valueSelector) {
    var result = this.GroupBy(keySelector);
    if (valueSelector) {
        for (var key in result) {
            result[key] = result[key].Select(valueSelector);
        }
    }
    return result;
});
