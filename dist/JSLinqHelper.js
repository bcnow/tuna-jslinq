var JSLinqHelper = (function () {
    function JSLinqHelper() {
    }
    JSLinqHelper.NonEnumerable = function (instance, name, value) {
        Object.defineProperty(instance, name, {
            value: value,
            enumerable: false,
            configurable: true
        });
    };
    JSLinqHelper.OrderCompareFunction = function (valueSelector, a, b, invert) {
        var value_a = valueSelector(a);
        var value_b = valueSelector(b);
        var type_a = typeof value_a;
        var type_b = typeof value_b;
        if (type_a === "string" && type_a === type_b) {
            var value_a_string = value_a;
            value_a_string = value_a_string.toLowerCase();
            var value_b_string = value_b;
            value_b_string = value_b_string.toLowerCase();
            if (value_a_string > value_b_string) {
                return invert === true ? -1 : 1;
            }
            else if (value_a_string < value_b_string) {
                return invert === true ? 1 : -1;
            }
            else {
                return 0;
            }
        }
        else if (type_a === "number" && type_a === type_b) {
            var value_a_number = value_a;
            var value_b_number = value_b;
            return invert === true ? value_b_number - value_a_number : value_a_number - value_b_number;
        }
        else if (type_a === "boolean" && type_a === type_b) {
            var value_a_bool = value_a;
            var value_b_bool = value_b;
            if (value_a_bool === value_b_bool) {
                return 0;
            }
            else {
                if (invert === true) {
                    return value_a_bool ? 1 : -1;
                }
                else {
                    return value_a_bool ? -1 : 1;
                }
            }
        }
        else {
            if (type_a === "undefined" && type_a === type_b) {
                return 0;
            }
            else if (type_a === "undefined") {
                return invert ? 1 : -1;
            }
            else if (type_b === "undefined") {
                return invert ? -1 : 1;
            }
            return 0;
        }
    };
    return JSLinqHelper;
}());
export { JSLinqHelper };
