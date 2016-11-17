function positiveSum(arr){
  return arr.reduce((result, current) => result += (current > 0) ? current : 0 , 0)
}