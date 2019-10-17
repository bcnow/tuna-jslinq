export var JSLinqOrderDirection;
(function (JSLinqOrderDirection) {
    JSLinqOrderDirection[JSLinqOrderDirection["Ascending"] = 0] = "Ascending";
    JSLinqOrderDirection[JSLinqOrderDirection["Descending"] = 1] = "Descending";
})(JSLinqOrderDirection || (JSLinqOrderDirection = {}));
var JSLinqOrder = /** @class */ (function () {
    function JSLinqOrder(direction, selector) {
        this.direction = direction;
        this.selector = selector;
    }
    return JSLinqOrder;
}());
export { JSLinqOrder };
