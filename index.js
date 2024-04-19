"use strict";
//Task 1
console.log("Task 1");
let greetings = "Hello, world!";
console.log(greetings);
//Task2
console.log("\nTask 2");
let num1 = 10, num2 = 5;
console.log(`number 1 = ${num1} and number 2 = ${num2}`);
console.log("sum of these numbers is =", num1 + num2);
console.log("difference of these numbers is =", num1 - num2);
console.log("product of these numbers is =", num1 * num2);
console.log("quotient of these numbers is =", num1 / num2);
//Task3
console.log("\nTask 3");
let n1 = 1, n2 = 2;
console.log(`Value of number 1 is = ${n1} and value of number 2 is = ${n2} before swapping`);
n1 = n1 + n2;
n2 = n1 - n2;
n1 = n1 - n2;
console.log(`Value of number 1 is = ${n1} and value of number 2 is = ${n2} after swapping`);
//Task4
console.log("\nTask 4");
let myString = "Hello, TypeScript!";
console.log(`our string variable originally has this line: ${myString}`);
let myNumber = 10;
myString = myNumber;
console.log(`after swapping its string value with an integer variable we get: ${myString}`);
//Task5
console.log("\nTask 5");
let numb1 = 5, numb2 = 9;
console.log(`number 1 is = ${numb1} and number 2 is = ${numb2}`);
console.log(`result of number2 % number1 is = ${numb2 % numb1}`);
//Task6
console.log("\nTask 6");
let counter = 0;
console.log(`initially counter is = ${counter}`);
console.log(`incrementation method 1 result: ${counter + 1}`);
console.log(`incrementation method 2 result: ${++counter}`);
//Task7
console.log("\nTask 7");
let a = true, b = false, c = true;
let andResult = a && b && c;
let orResult = a || b || c;
let notA = !a;
let notB = !b;
let notC = !c;
console.log("AND Result:", andResult);
console.log("OR Result:", orResult);
console.log("NOT of a:", notA);
console.log("NOT of b:", notB);
console.log("NOT of c:", notC);
//Task8
console.log("\nTask 8");
let num = 10;
num += 5;
console.log(num);
num -= 3;
console.log(num);
num *= 2;
console.log(num);
num /= 4;
console.log(num);
//Task9
console.log("\nTask 9");
let checkNum = 10;
console.log(`the number to check is: ${checkNum}`);
if (checkNum % 2 === 0) {
    console.log("it is even");
}
else {
    console.log("it is odd");
}
//Task10
console.log("\nTask 10");
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote yet.");
}
//Task11
console.log("\nTask 11");
let score = 85;
let grade;
if (score >= 90) {
    grade = "A";
}
else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
}
else {
    grade = "F";
}
console.log(`Your grade is: ${grade}`);
//Task12
console.log("\nTask 12");
let x = 10;
let y = 20;
let z = 15;
let max;
if (x >= y && x >= z) {
    max = x;
}
else if (y >= x && y >= z) {
    max = y;
}
else {
    max = z;
}
console.log(`The maximum of x = ${x}, y = ${y}, and z = ${z} is: y = ${max}`);
//Task13
console.log("\nTask 13");
let year = 2024;
let isLeapYear;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}
//Task14
console.log("\nTask 14");
let fahrenheit = 68;
let celsius = (5 / 9) * (fahrenheit - 32);
console.log(`${fahrenheit} degrees Fahrenheit is equal to ${celsius.toFixed(2)} degrees Celsius.`);
//Task15
console.log("\nTask 15");
let number = -7;
if (number > 0) {
    console.log("The number is positive.");
}
else if (number < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}
//Task16
console.log("\nTask 16");
let multiple = 5;
console.log(`Multiplication table for ${multiple}:`);
for (let i = 1; i <= 10; i++) {
    let result = multiple * i;
    console.log(`${multiple} * ${i} = ${result}`);
}
