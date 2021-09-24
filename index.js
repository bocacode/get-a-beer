const beers = require('./beers.json')

// enter a number from 0 to 179
const beerNum = 145

const stars = '*****'
const { name, price, rating } = beers[beerNum]
// output the name of the beer, the price, and 
console.log(name)
console.log(price)
// the average rating using asterisks
// i.e. **** is a 4-star rating (use Math.round)
console.log(stars.substr(0, Math.round(rating.average)))