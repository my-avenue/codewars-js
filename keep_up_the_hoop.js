const hoopCount = n => (n<10) ? "Keep at it until you get it" : "Great, now move on to tricks"


console.log(hoopCount(5))



/*answer

Keep at it until you get it

----------------------------------------------------------------
test.assertEquals(hoopCount(3), "Keep at it until you get it")
test.assertEquals(hoopCount(11), "Great, now move on to tricks")

*/