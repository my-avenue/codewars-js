let ans = 0
let original = console.log

console.log = (value) => {
 ans = value.length
 original(value)
}

const count = () => ans



//example//
/*

console.log("1") -> 1
console.log("aa") -> 2
console.log("aaa") -> 3
console.log("aaaaaaaa") -> 8

*/