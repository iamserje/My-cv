var apple = {
  delicious: true
}

var honeycrisp = Object.create(apple);
console.log(apple);
console.log(honeycrisp);
console.log(honeycrisp.delicious)