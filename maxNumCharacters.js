var str = 'abcdabcd';

function maxNumCharacters(string) {
  let len = string.length;
  let result = Object.create(null);
  for(let i = 1; i <= len; i++) {
    for(let j = 0, rest = len - i; j <= rest; j++) {
      let tmp = string.substr(j, i);
      if(result[tmp]) {
        result[tmp] += 1;
      }else {
        result[tmp] = 1;
      }
    }
  }
  console.log(result);
  let maxKey = '';
  let maxVal = 0;
  for(let key in result) {
    if(maxVal <= result[key] && key.length >= maxKey.length) {
      maxKey = key;
      maxVal = result[key];
    }
  }
  return [maxKey, maxVal];
}

console.log(maxNumCharacters(str));
