import { JSLinqHelper } from "../JSLinqHelper";
import { JSLinqOrder, JSLinqOrderDirection } from "../JSLinqOrder";
JSLinqHelper.NonEnumerable(Array.prototype, "OrderByDescending", function (selector) {
    var ordered = this.Clone();
    ordered._JSLinq.Order = new Array(new JSLinqOrder(JSLinqOrderDirection.Descending, selector));
    return ordered.sort(function (a, b) {
        return JSLinqHelper.OrderCompareFunction(selector, a, b, true);
    });
});
