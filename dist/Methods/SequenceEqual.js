import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "SequenceEqual", function (array) {
    if (this === array) {
        return true;
    }
    if (this.length !== array.length) {
        return false;
    }
    // return this.All(item => array.Contains(item));
    for (var i = 0; i < this.length; i++) {
        var left = this[i];
        var right = array[i];
        if (left !== right) {
            return false;
        }
    }
    return true;
});
