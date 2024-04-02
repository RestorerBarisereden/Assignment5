let num1 = 3
let num2= 8
let operation = "+";
switch (operation){
case "+":
    console.log('Addition', num1 + num2); break;
case "-":
    console.log("Subtraction", num1 - num2); break;
case "*":
    console.log("Multiplication", num1 * num2); break;
case "%":
    console.log("Modulus", num1 % num2); break;
case "/":
    console.log("Division", num1 / num2); break;
default:
    console.log("invalid operator"); break;
}