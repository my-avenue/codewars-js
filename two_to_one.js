const longest = (s1, s2) => {
  const str = s1+s2
  return str.split('').sort().reduce((result,current) => result.includes(current) ? result : [...result, current] ,[]).join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))



/*answer

["a", "e", "h", "r", "s", "t", "y"]
"aehrsty"

-----------------------------------------------
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/