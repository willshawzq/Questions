/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // version 1
var twoSum = function(nums, target) {
  for(let i = 0, len = nums.length; i < len; i++) {
      let rest = target - nums[i];
      let restIndex = nums.indexOf(rest, i+1);
      console.log(i, restIndex);
      if(restIndex > -1) return [i, restIndex];
    }
};
//console.log(twoSum([3,2,4], 6));

// version 2
var twoSum1 = function(nums, target) {
  let map = {};
  for(let i = 0, len = nums.length; i < len; i++) {
    let num = nums[i];
    let rest = target - num;
    if(map[rest] === undefined) {
      map[num] = i;
    }else {
      console.log(i, map);
      return [i, map[rest]];
    }
  };
}
console.log(twoSum1([2, 7, 11, 15], 9));
