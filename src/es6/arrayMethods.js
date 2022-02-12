const array = [1, 1, 2, 3, 4];

const b = array.map((item, index) => item + 1);
// b is [2,2,3,4,5]
const c = array.filter((item, index) => item === 1);
// c is [1,1]
const d = array.find((item, index) => item === 1);
// d is 1
const e = array.reduce((result, item, index) => {
  return result + item;
}, 0);
// e is 11
const f = array.some((item, index) => item === 4);
// f is true

// More https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
