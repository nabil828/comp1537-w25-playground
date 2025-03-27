
let unicorns = require('./data.js')
// console.log(unicorns);

// 1. Find the male unicorns weigh more than 700 pounds
// const resultArr = unicorns.filter((aUnicorn) => {
//   if (aUnicorn.weight > 700 && aUnicorn.gender == "m")
//     return true
//   else
//     return false
// })
// const resultArr = unicorns.filter(aUnicorn => aUnicorn.weight > 700 && aUnicorn.gender == "m")

// console.log(resultArr); // 2. Unicrom and Dunx






// 2.Find the unicorns that have no vampire field
// const resultArr = unicorns.filter(aUnicorn => aUnicorn.vampires == undefined)

// console.log(resultArr); // Only one unicorn. Nimue?







// 3. Find the unicorns that like apples or carrots
// const resultArr = unicorns.filter(aUnicorn => aUnicorn.loves.includes("apple") || aUnicorn.loves.includes("carrot"))

// console.log(resultArr); // 






// 4. Find the female unicorns that either love apples or weigh less than 500 pounds
// const resultArr = unicorns.filter(aUnicorn =>
//   aUnicorn.gender == "f" && (
//     aUnicorn.loves.includes("apple")
//     ||
//     aUnicorn.weight < 500
//   ))

// console.log(resultArr); // 3 Unicorns 








// 5. Decrease unicorn Pilot’s number of vampires by 2
// const resultsArr = unicorns.map(aUnicorn => {
//   if (aUnicorn.name == "Pilot")
//     aUnicorn.vampires = aUnicorn.vampires - 2
//   return aUnicorn
// })
// const resultsArr = unicorns.map(aUnicorn => {
//   if (aUnicorn.name == "Pilot")
//     return { ...aUnicorn, vampires: aUnicorn.vampires - 2 }
//   return aUnicorn
// })
// console.log(resultsArr);







// 6. Add “sugar” to the list of food unicorn Aurora loves to eat

// const resultArr = unicorns.map((aUnicorn) => {
//   if (aUnicorn.name == "Aurora")
//     aUnicorn.loves.push("sugar")
//   return aUnicorn
// })

// console.log(resultArr);






// 7. Give all of the unicorns vaccine(set vaccinated to be true)
// const resultArr = unicorns.map((aUnicorn) => {
//   aUnicorn.vaccinated = true
//   return aUnicorn
// })

// console.log(resultArr);











// 8.Sort the unicorns based on weights decreasingly, 984, 875, 461, ... 
// const resultArr = unicorns.sort((a, b) => {
//   if (a.weight > b.weight)
//     return -1 // to place a before b
//   else
//     return +1 // to place b before a
// })
// console.log(resultArr);

// 9.Sort the unicorns based on the names increasingly, then the number of vampires decreasingly
// const resultArr = unicorns.sort((a, b) => {
//   if (a.name < b.name)
//     return -1 // to place a before b
//   else if (a.name > b.name)
//     return +1 // to place b before a
//   else {
//     if (a.vampires > b.vampires)
//       return -1
//     else
//       return 1
//   }
// })
// console.log(resultArr);






// 10.Get the second and third heaviest unicorns
// const resultArr = unicorns.sort((a, b) => {
//   if (a.weight > b.weight)
//     return -1
//   else
//     return 1
// })

// // console.log(resultArr[1]);
// // console.log(resultArr[2]);

// console.log(resultArr.slice(1,3));









// 11.Count the number of unicorns who have more than 50 vampires
// const resultArr = unicorns.filter((aUnicorn) => {
//   if (aUnicorn.vampires > 50)
//     return true
// })

// console.log(resultArr.length);






// 12. Find the average weight of unicorns that love apples
const love_apples_arr = unicorns.filter((u) => u.loves.includes("apple"));
// console.log(love_apples_arr);

const result = love_apples_arr.reduce((sum, aUnicorn) => {
  return aUnicorn.weight + sum
}, 0)

console.log(result / love_apples_arr.length);