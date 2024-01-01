// let score = 33
// console.log(typeof score);

// let score = "33"
// console.log(typeof score);

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// let valueInNumber = Boolean(score)
// console.log(typeof valueInNumber);

// let score = "33abc"
// console.log(typeof score);
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let score = null
// console.log(typeof score);
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let score = undefined
// console.log(typeof score);
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let score = true
// console.log(typeof score);
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let score = false
// console.log(typeof score);
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let score = "Koushik"
// console.log(typeof score);
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/* 
Summary: 
"33" => 33
"33abc" => NaN(Not-a-Number) [Datatype: Number]
true => 1
false => 0
*/

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// let isLoggedIn = 0
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// let isLoggedIn = "Koushik"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/* 
Summary: 
1 => true 
0 => false
"" => false
"Koushik" => true 
*/

// let someNumber = 7
// let stringInNumber = String(someNumber)
// console.log(typeof stringInNumber)
// console.log(stringInNumber);

// ********************************************* Operations ******************************************
// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //[2^3]
// console.log(2/3);
// console.log(2%3);

// let str1 = "Hello"
// let str2 = " Koushik"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

/* 
Summary: 
If string is at first, then all the rest of the operands will also be considered as string without any conversion. 
If string is at the end, then conversion will be done before the string and then added to the string.
*/

// console.log(true); [Output => true]
// console.log(+true); [Output => 1]
// console.log(true+); [Not Possible]
// console.log(true++); [Not Possible]
// console.log(+""); [Output => 0]

/*
let num1, num2, num3
num1 = num2 = num3 = 2+2 //[Not a good practice]
*/

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);

/*
Prefix Operator [++x]: Values are incremented before its usage.
Postfix Operator [x++]: Values are incremented after its usage.

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

*/