x = true
console.log(x);


console.log(true || false);
console.log(true && false);
console.log(!(true && false));



let y;
if (y) // undefined is a Falsy type
  console.log(111);
else
  console.log(222);


if ("43298347") //  Truthy type
  console.log(111);
else
  console.log(222);


for (let i = 0; i < 10; i++);
console.log(1);

for (let i = 0; i < 10; i++) {
  if (i == 3)
    break;
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 3)
    continue;
  console.log(i);
}


console.log(3 == 3)
console.log(3 == "3")
console.log(3 === "3")


