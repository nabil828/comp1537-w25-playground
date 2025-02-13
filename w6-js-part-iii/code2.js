x = "Hello World!"
start = 1
end = 3
console.log(x.slice(start, end));
console.log(x.slice(start));
console.log(x.substring(start, end));
console.log(x.slice(-3));
console.log(x.slice(-3, -1));

length = 5
console.log(x.substr(start, length));

console.log(x.replace("H", "$"));
console.log(x.replace("H", "$"));
console.log(x.toLowerCase("H", "h"));

console.log(x.concat("!"));
console.log(x.concat("! ").trim());

console.log("7".padStart(3, "0"));
console.log("78".padStart(3, "0"));
console.log("788".padStart(3, "0"));
console.log("".padStart(3, "0"));
console.log("837423479287".padStart(3, "0"));

console.log(x.charAt(3));
console.log(x.charCodeAt(0));


console.log("apple,orange,banana".split(","));
console.log("apple,orange,banana".split(',').join("-"));



x1 = "John"
x2 = `Hi ${x1}` // string template interpolation
console.log(x2);



arr1 = ["1", "2", "3"]
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[-1]);
console.log(arr1.at(-1));
arr1[1] = "22"
console.log(arr1);
console.log(arr1.length);

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}


let i = 0;
while (i < arr1.length) {
  console.log(arr1[i]);
  i++
}

i = 0;
do {
  console.log(arr1[i]);
  i++;
} while (i < arr1)

console.log(arr1.toString());


y = ["apple", "banana", "orange"]

y.push("Kiwi")
console.log(y);

y.pop()
console.log(y);

y.shift()
console.log(y);

y.unshift("Kiwi")
console.log(y);





console.log(Math.PI);
console.log(Math.E);


console.log(Math.ceil(3.7));
console.log(Math.floor(3.7));
console.log(Math.trunc(3.7));
console.log(Math.round(3.7));

console.log(Math.round(3.5));
console.log(Math.ceil(3.5));
console.log(Math.floor(3.5));
console.log(Math.trunc(3.5));


console.log(Math.max(1, 2));
console.log(Math.min(1, 2));


console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);

console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);


min = 11 //(Inclusive)
max = 17 //(Inclusive)
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));








