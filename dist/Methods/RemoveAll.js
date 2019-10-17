import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "RemoveAll", function (selector) {
    if (!selector)
        return this.Clear();
    var i = this.length;
    while (i--) {
        var item = this[i];
        if (selector(item, i) === true) {
            this.RemoveAt(i);
        }
    }
    return this;
});
