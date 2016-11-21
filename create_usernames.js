const addUsername = (list) => list.map((current) => {
  current.username = (current.firstName + current.lastName[0]).toLowerCase() + ((new Date().getFullYear())-current.age)
  return current
})



var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]

console.log(addUsername(list1))

/*answer  ***age from the current year.

[{ age: 30, continent: "Europe", country: "Ireland", firstName: "Emily", language: "Ruby", lastName: "N.", username: "emilyn1986" }, 
{ age: 20, continent: "Asia", country: "Malaysia", firstName: "Nor", language: "Clojure", lastName: "E.", username: "nore1996" }]

*/