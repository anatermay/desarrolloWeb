let a = 10;
let b = 20;
let c = 5;

a = a + 3;
b = b + 4 - a;
c = a + b + c;
a = a + c;
b = 4;
c = c + 3 - b + 2;

console.log(a);
console.log(b);
console.log(c);
