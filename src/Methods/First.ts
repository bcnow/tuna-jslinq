﻿import { JSLinqHelper } from "../JSLinqHelper";

JSLinqHelper.NonEnumerable(Array.prototype, "First",
    function <T>(this: T[], selector?: (item: T, index: number) => boolean): T {
        const result = this.FirstOrDefault(selector);
        if (result) return result;

        throw new Error("Tuna-JSLinq: The First Entry was not found");
    });