const basicOp = (a,b,c) =>{
  switch (a) {
    case '+':
      return b+c;
    case '-':
      return b-c;
    case '*':
      return b*c;
    case '/':
      return b/c;
    default:
      console.log(0);
  }
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