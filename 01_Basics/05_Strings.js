const name = "Koushik"
const repoCount = 100

/*console.log(name + repoCount + " Value"); //This syntax is not recommended. */

/*
console.log(`Hello! My name is ${name} and my repository count is ${repoCount}`); 
//This modern way of syntax is recommended. It is called string interpolation.
*/

/**********How to declare string? **********/
// const gameName = new String('Koushikpaul06')
const gameName = new String('Koushik-paul-06')

/**********How to access key value pair in string? **********/
// console.log(gameName[5]);

/**********How to access prototype in string? **********/
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

/**********To find which character is placed at a given index **********/
// console.log(gameName.charAt(2));

/**********To find at what index the given character is placed **********/
// console.log(gameName.indexOf('u'));

/********** To divide a string into substring **********/
// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-13,5)
// console.log(anotherString);

// Trim is used to remove starting space and ending space, especially occurs while filling up form. It also removes new lines.
const newStringOne = "   Koushik     "
console.log(newStringOne);
console.log(newStringOne.trim());

/********** Replace Method in String **********/
const url = "https://koushikpaul%06"
console.log(url.replace('%', '-'));

/********** To check whether a given keyword is there or not - using "include" method **********/
console.log(url.includes('koushik'));
console.log(url.includes('Siddarth'));

/********** To split a string **********/
console.log(gameName.split('-'));