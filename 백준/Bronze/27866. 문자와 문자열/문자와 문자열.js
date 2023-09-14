const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let str = input[0];
let num = parseInt(input[1])-1;

console.log(str[num]);