const array_diff = (a, b) =>  a.filter(a => b.indexOf(a) == -1 )

console.log(array_diff([1,2,2,3,4,5,7],[1,3,5]))


/*answer

[2, 2, 4, 7]

*/