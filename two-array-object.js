// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    // convert keys array into object using array.reduce sets current value as akey in accumulator object, with value set to whatever element is at the current index in the values array.
    return keys.reduce((obj, cur, idx) => {
        obj[cur] = idx < values.length ? values[idx] : null;
        return obj;
    }, {});
}

/** const keys = ['a', 'b', 'c'];
const values = [1, 2];
BECOMES
{ a: 1, b: 2, c: null } */

module.exports = twoArrayObject;