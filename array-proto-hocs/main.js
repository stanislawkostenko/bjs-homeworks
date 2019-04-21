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

const sum = (a, b) => a + b;
const mSum = memoize(sum, 2);

function memoize(fn, limit) {
    const results = new Array();

    return function() {
        const args = Array.from(arguments);

        if (results.length > limit) {
            results.pop();
            console.log('Превышен лимит')
        } else {
            results.push({
                args: args,
                result: fn.apply(null, Array.from(arguments))
            });
            console.log(results);
            return results;
        }
    }
}

mSum(5, 20)
mSum(5, 20)
mSum(5, 21)
mSum(5, 22)
