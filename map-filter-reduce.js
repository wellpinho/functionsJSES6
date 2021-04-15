const myArr = [
  "R$ 200",
  "R$ 400",
  "Contas a pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
]

/*
  This function does the filtering of the array where it has "R$"
  and puts in a new array precosFilter
*/
const precosFilter = myArr.filter(preco => preco.includes('R$'))

/*
  This function takes the new array created by precosFilter and creates 
  a new array with .map() making a replace by removing 'R $' and placing '' empty.
  and conterting a string to a number
*/
const precoNumbers = precosFilter.map(preco => Number(preco.replace('R$ ', '')))
console.log(precoNumbers)