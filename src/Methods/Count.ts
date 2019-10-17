﻿import { JSLinqHelper } from "../JSLinqHelper";

JSLinqHelper.NonEnumerable(Array.prototype, "Count",
    function <T>(this: T[], selector?: (item: T, index: number) => boolean): number {
        return !selector ? this.length : this.Where(selector).length;
    });