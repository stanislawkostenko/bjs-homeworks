// Task 1 - compareArrays

function compareArrays(arg1, arg2) {
    if (arg1.length == arg2.length) {
        return arg1.every((element, item) => element === arg2[item]);
    } else {
      return false;
    }
}

console.log(compareArrays([1, 2, 3], [1, 2, 3]));
console.log(compareArrays([1, 2, 3], [1, 2, 2]));
console.log(compareArrays([1, 2, 3], [1, 2, 3, 1]));

function memoize(fn, limit) {
  
}
