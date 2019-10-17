﻿import { JSLinqHelper } from "../JSLinqHelper";
JSLinqHelper.NonEnumerable(Array.prototype, "AddRange",
    function <T>(this: T[], items: T[]): T[] {
        items.ForEach(f => this.push(f));
        return this;
    });