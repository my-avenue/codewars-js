var min = function(list){ 
   const min1 = list.reduce((res,curr) => curr<res ? curr : res) 
   return list.filter((curr) => curr>min1).reduce((res,curr) => curr<res ? curr : res)
}

var max = function(list){
    const max1 = list.reduce((res,curr) => curr>res ? curr : res)
    return list.filter((curr) => curr<max1).reduce((res,curr) => curr>res ? curr : res)
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]))//min number 2
console.log(max([-52, 56, 30, 29, -54, 0, -110]))// max number 2


/*
var min = function(list){ 
   return Math.min(...list)
}

var max = function(list){
    return Math.max(...list)
}
*/



/*  test
max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0
*/
