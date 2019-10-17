interface IArrayState<T> {
    Order: JSLinqOrder<T>[];
}
import './IArray';
import './Methods/Add';
import './Methods/AddRange';
import './Methods/Aggregate';
import './Methods/All';
import './Methods/Any';
import './Methods/Average';
import './Methods/Clear';
import './Methods/Clone';
import './Methods/Concat';
import './Methods/Contains';
import './Methods/Count';
import './Methods/Distinct';
import './Methods/FindIndex';
import './Methods/FindLastIndex';
import './Methods/First';
import './Methods/FirstOrDefault';
import './Methods/ForEach';
import './Methods/Get';
import './Methods/GroupBy';
import './Methods/Insert';
import './Methods/Intersect';
import './Methods/Join';
import './Methods/Last';
import './Methods/LastOrDefault';
import './Methods/Max';
import './Methods/Min';
import './Methods/Move';
import './Methods/Order';
import './Methods/OrderBy';
import './Methods/OrderByDescending';
import './Methods/Range';
import './Methods/Remove';
import './Methods/RemoveAll';
import './Methods/RemoveAt';
import './Methods/RemoveRange';
import './Methods/Repeat';
import './Methods/Reverse';
import './Methods/Select';
import './Methods/SelectMany';
import './Methods/SequenceEqual';
import './Methods/Single';
import './Methods/SingleOrDefault';
import './Methods/Skip';
import './Methods/Sum';
import './Methods/Take';
import './Methods/TakeWhile';
import './Methods/ThenBy';
import './Methods/ToDictionary';
import './Methods/Union';
import './Methods/Where';
import './Methods/Zip';
import { JSLinqOrder } from './JSLinqOrder';
declare global {
    interface Array<T> extends ArrayJSLinq<T> {
        _JSLinq: IArrayState<T>;
    }
}
declare const JSLinq: <T = any>(array?: T | T[] | undefined) => T[];
export default JSLinq;
