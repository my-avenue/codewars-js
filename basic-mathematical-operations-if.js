const basicOp = (a,b,c) =>{
  if(a === '+'){
    return b+c
  }else if(a === '-'){
    return b-c
  }else if(a === '*'){
    return b*c
  }
  return b/c
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))
console.log(basicOp('*', 5, 5))
console.log(basicOp('/', 49, 7))


/*

11
-3
25
7

*/