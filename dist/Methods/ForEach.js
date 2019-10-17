import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "ForEach", function (action) {
    var length = this.length;
    for (var i = 0; i < length; i++) {
        var result = action(this[i], i);
        if (result === true) {
            break;
        }
    }
    return this;
});
