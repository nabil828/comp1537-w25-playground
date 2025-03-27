unicorns = [
  {
    name: 'Horny',
    dob: new Date(1992, 2, 13, 7, 47),
    loves: ['carrot', 'papaya'],
    weight: 600,
    gender: 'm',
    vampires: 63
  },
  {
    name: 'Aurora',
    dob: new Date(1991, 0, 24, 13, 0),
    loves: ['carrot', 'grape'],
    weight: 450,
    gender: 'f',
    vampires: 43
  },
  {
    name: 'Unicrom',
    dob: new Date(1973, 1, 9, 22, 10),
    loves: ['energon', 'redbull'],
    weight: 984,
    gender: 'm',
    vampires: 182
  },
  {
    name: 'Roooooodles',
    dob: new Date(1979, 7, 18, 18, 44),
    loves: ['apple'],
    weight: 575,
    gender: 'm',
    vampires: 99
  },
  {
    name: 'Solnara',
    dob: new Date(1985, 6, 4, 2, 1),
    loves: ['apple', 'carrot', 'chocolate'],
    weight: 550,
    gender: 'f',
    vampires: 80
  },
  {
    name: 'Ayna',
    dob: new Date(1998, 2, 7, 8, 30),
    loves: ['strawberry', 'lemon'],
    weight: 733,
    gender: 'f',
    vampires: 40
  },
  {
    name: 'Kenny',
    dob: new Date(1997, 6, 1, 10, 42),
    loves: ['grape', 'lemon'],
    weight: 690,
    gender: 'm',
    vampires: 39
  },
  {
    name: 'Raleigh',
    dob: new Date(2005, 4, 3, 0, 57),
    loves: ['apple', 'sugar'],
    weight: 421,
    gender: 'm',
    vampires: 2
  },
  {
    name: 'Leia',
    dob: new Date(2001, 9, 8, 14, 53),
    loves: ['apple', 'watermelon'],
    weight: 601,
    gender: 'f',
    vampires: 33
  },
  {
    name: 'Pilot',
    dob: new Date(1997, 2, 1, 5, 3),
    loves: ['apple', 'watermelon'],
    weight: 650,
    gender: 'm',
    vampires: 54
  },
  {
    name: 'Nimue',
    dob: new Date(1999, 11, 20, 16, 15),
    loves: ['grape', 'carrot'],
    weight: 540,
    gender: 'f'
  },
  {
    name: 'Dunx',
    dob: new Date(1976, 6, 18, 18, 18),
    loves: ['grape', 'watermelon'],
    weight: 704,
    gender: 'm',
    vampires: 165
  }
];

// Q1
// Find the male unicorns weigh more than 700 pounds

// const result = unicorns.filter(aUnicorn => (aUnicorn.gender == "m" && aUnicorn.weight > 700))

// console.log(result);


// Find the unicorns that have no vampire field

// const result = unicorns.filter(aUnicorn => (aUnicorn.vampires == undefined))
// console.log(result);


// Find the unicorns that like apples or carrots
// const result = unicorns.filter(aUnicorn => (aUnicorn.loves.includes("apple") || aUnicorn.loves.includes("carrot")))
// console.log(result);


// 4- Find the female unicorns that either love apples or weigh less than 500 pounds
// result = unicorns.filter(aUnicorn =>
//   aUnicorn.gender == "f"
//   &&
//   (aUnicorn.loves.includes("apple") || aUnicorn.weight < 500)
// )
// console.log(result);

//  5- Decrease unicorn Pilot’s number of vampires by 2


// const result = unicorns.map((aUnicorn) => {
//   if (aUnicorn.name == "Pilot")
//     aUnicorn.vampires = aUnicorn.vampires - 2
//   return aUnicorn
// })

// unicorns = unicorns.map((aUnicorn) => {
//   if (aUnicorn.name == "Pilot")
//     return { ...aUnicorn, vampires: aUnicorn.vampires - 2 }
//   return aUnicorn
// })
// console.log(unicorns);

// console.log(result);


// Person = {
//   name: "John",
//   age: 21
// }
// arr = [1, 2]
// console.log([...arr, 3]);


// Add “sugar” to the list of food unicorn Aurora loves to eat

// const result = unicorns.map((aUnicorn) => {
//   if (aUnicorn.name == "Aurora")
//     aUnicorn.loves.push("sugar")
//   return aUnicorn
// })

// const result = unicorns.map((aUnicorn) => {
//   if (aUnicorn.name == "Aurora")
//     return { ...aUnicorn, loves: [...aUnicorn.loves, 'sugar'] }
//   return aUnicorn
// })

// console.log(result);


// Give all of the unicorns vaccine(set vaccinated to be true)
// const result = unicorns.map((aUnicorn) => {
//   // aUnicorn.vaccinated = true

//   return {...aUnicorn, vanccinated: true}
// })

// console.log(result);


// 8- Sort the unicorns based on weights decreasingly
// const result = unicorns.sort((a, b) => {
//   if (a.weight > b.weight)
//     return -112
//   else
//     return 11111
// })
// console.log(result);


// 9- Sort the unicorns based on the names increasingly, then the number of vampires decreasingly

// const result = unicorns.sort((a, b) => {
//   if (a.name < b.name)
//     return -1
//     return -1
//   else {
//     if (a.vampires > b.vampires)
//       return -1
//     else
//       return 1
//   }
// })

// console.log(result);


// 10 - Get the second and third heaviest unicorns

// const result = unicorns.sort((a, b) => {
//   if (a.weight > b.weight)
//     return -112
//   else
//     return 11111
// })
// // console.log(result[1]);
// // console.log(result[2]);
// console.log(result.slice(1, 3));


// // 11
// const result = unicorns.filter((aUnicorn) => {
//   if (aUnicorn.vampires > 50)
//     return true
//   return false
// })

// console.log(result.length);

// 12. Find the average weight of unicorns that love apples
const love_apples_arr = unicorns.filter((u) => u.loves.includes("apple"));

const result = love_apples_arr.reduce((sum, aUnicorn) => {
  return sum + aUnicorn.weight
}, 0)

console.log(result / love_apples_arr.length);