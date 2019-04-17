// Task 1 - compareArrays

function compareArrays(arg1, arg2) {
    for (let i in arg1 && arg2) {
        if ((arg1.length == arg2.length) && arg1.includes(arg2)) {
        return true;
        }
    }
}

compareArrays([1, 2, 3], [1, 2, 3]);
