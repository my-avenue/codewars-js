const keepOrder = (ary, val) => ary.reduce((result, current) => current < val ? result+1 : result, 0)

console.log(keepOrder([1, 2, 3, 4], 5))