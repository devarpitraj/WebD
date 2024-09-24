console.log("Hello, World!")

var a = 5;
var b = 6;
console.log(a + b + 8)

var c = "Javascrpit";
console.log(typeof a, typeof b, typeof c);

// Always use let - because let is blocked scoped and var is globally scoped
let d = 5;
{
    let d = 55;
    console.log(d)
}
console.log(d)

let x = "JS";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    "name": "Arpit",
    "job code": 5600 
}

console.log(o);

o.salary = "1000K"
console.log(o);
o.salary = "500000K"
console.log(o);