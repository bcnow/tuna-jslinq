import { JSLinqHelper } from "../JSLinqHelper";
import { JSLinqOrder, JSLinqOrderDirection } from "../JSLinqOrder";
JSLinqHelper.NonEnumerable(Array.prototype, "ThenByDescending", function (selector) {
    var order = this._JSLinq.Order;
    if (order == null || !order.Any()) {
        throw new Error("Tuna-JSLinq: Please call OrderBy or OrderByDescending before ThenByDescending");
    }
    var ordered = this;
    order.Add(new JSLinqOrder(JSLinqOrderDirection.Descending, selector));
    return ordered.sort(function (a, b) {
        for (var _i = 0, order_1 = order; _i < order_1.length; _i++) {
            var entry = order_1[_i];
            var result = JSLinqHelper.OrderCompareFunction(entry.selector, a, b, entry.direction === JSLinqOrderDirection.Descending);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    });
});
