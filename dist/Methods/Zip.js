import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Zip", function (array, selector) {
    var result = new Array();
    this.ForEach(function (item, index) {
        if (item != null) {
            result.Add(selector(item, array[index]));
        }
    });
    return result;
});
