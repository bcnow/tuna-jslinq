import { JSLinqHelper } from "../JSLinqHelper";
import { JSLinqOrder, JSLinqOrderDirection } from "../JSLinqOrder";
JSLinqHelper.NonEnumerable(Array.prototype, "OrderBy", function (selector) {
    var clone = this.Clone();
    clone._JSLinq.Order = new Array(new JSLinqOrder(JSLinqOrderDirection.Ascending, selector));
    return clone.sort(function (a, b) {
        return JSLinqHelper.OrderCompareFunction(selector, a, b, false);
    });
});
