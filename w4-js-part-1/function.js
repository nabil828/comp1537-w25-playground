// 1
function f1(x) {
  x = x + 1
  return x
}

const result = f1(6)
console.log(result);

const result2 = f1(8)
console.log(result2);


function f2(a, b) {
  const result = (a ** 2 + b ** 2) ** .5;
  return result;
}

console.log(f2(3, 4));
console.log(f2(6, 8));
console.log(f2(10, 12));


// 2
f3 = function (x) {
  return x
} // Anonymous function literals

x = f3
f3(5)
x(5)

// 3 using Arrow function
// (a ** 2 + b ** 2) ** .5 is the equivelent to {return (a ** 2 + b ** 2) ** .5}
f4 = (a, b) => (a ** 2 + b ** 2) ** .5
console.log(f4(3, 4));



