/**
 *Given an array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber (nums=[]) {
   return nums.reduce((a, b) => a^b, 0);//这里加0是防止空数组时，reduce没有初始值的错误。初始值为零，也就相当于没有做任何计算，所以没有影响。
};
/**
这里主要使用了^(按位异或)运算符，其特点为对于每一个比特位，当两个操作数相应的比特位有且只有一个1时，结果为1，否则为0
也就是说每一个比特位有偶数个1时，结果便为零。这道题目限定了，传入的数组除去一个以为其他的数字出现了2次，所以基于X^X=0的特性
最后剩下的数字一定为那个落单的数字。
*/
