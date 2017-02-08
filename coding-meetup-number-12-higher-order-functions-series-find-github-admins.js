const findAdmin = (list, lang) => list.filter(({language: l, githubAdmin: g}) => l == lang && g == 'yes')


const list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];



console.log(findAdmin(list1, 'JavaScript'))



/*answer
[
   [object Object] {age: 22, continent: "Americas", country: "Brazil", firstName: "Harry", githubAdmin: "yes", language: "JavaScript", lastName: "K." }, 
   [object Object] {age: 34, continent: "Asia", country: "China", firstName: "Jing", githubAdmin: "yes", language: "JavaScript", lastName: "X." }
]
*/