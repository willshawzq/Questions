// n个数中，n-1个重复偶数次，1个出现奇数次，怎么找出出现奇数次的那个数

function getShowOddTimesNumber(array) {
  let obj = Object.create(null);
  array.forEach(item => obj[item] = !obj[item]);
  for(let key in obj) {
    if(obj[key] == 1) {
      return key;
    }
  }
}
let arr = [1,2,3,4,5,1,2,3,4,5,6];

console.log(getShowOddTimesNumber(arr));
