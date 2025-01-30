aCarObject = {
  "make": "Mazda",
  "model": "3",
  "year": "2020",
  "features": ["f1", "f2", "f3"],
  "drive": () => { console.log(`Voomm Voomm!`); },
  "nestedObject": {
    "key1": "v1",
    "key2": "v2"
  }
}

console.log(aCarObject.features);
console.log(aCarObject.features[0]);
console.log(aCarObject.features[1]);
console.log(aCarObject.features[2]);

console.log(aCarObject["features"][2]);

aCarObject.drive();
console.log(aCarObject.nestedObject.key2);


