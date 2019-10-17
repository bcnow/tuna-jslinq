import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "Select", function (selector) {
    var result = new Array();
    this.ForEach(function (f, i) {
        var item = selector(f, i);
        result.Add(item);
    });
    return result;
});
