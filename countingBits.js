/**
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].
*/
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = [];
    for(var i = 0; i < num; i++) {
        var _arr = i.toString(2).match(/1/g) || [];
        result.push(_arr.length);
    }
    return result;
};
