"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let totalMarks = 850;
let obtainMarks = 620;
let per = (obtainMarks / totalMarks) * 100;
console.log(per);
if (per >= 90 && per <= 100) {
    console.log(`your per is ${per} which is A+ garde and your are eligible fo the next class`);
}
else if (per >= 80 && per <= 89) {
    console.log(`your per is ${per} which is A garde and your are eligible fo the next class`);
}
else if (per >= 70 && per < 79) {
    console.log(`your per is ${per} which is B garde and your are eligible fo the next class`);
}
else if (per >= 60 && per < 69) {
    console.log(`your per is ${per} which is C garde and your are eligible fo the next class`);
}
else {
    console.log(`your per is ${per} which is D garde and below expectation and your are not eligible fo the next class`);
}
