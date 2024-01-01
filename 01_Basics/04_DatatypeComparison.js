// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

/*
console.log("2">1); //JS automatically converts 2 as a number
console.log("02">1);
*/
// ************************ These types of comparisons should be avoided ************************** 
// console.log(null > 0); [Output => false]
// console.log(null == 0); [Output => false]
// console.log(null >= 0); [Output => true]

/* 
The reason is that an equality check == and comparisons >,<,>=,<= work differently. 
Comparisons convert null to a number, treating it as 0.
That's why [null >= 0] is true and [null > 0] is false.
*/

/*
console.log(undefined > 0); //[Output => false]
console.log(undefined == 0); //[Output => false]
console.log(undefined < 0); //[Output => false]
console.log(undefined >= 0); //[Output => false]
console.log(undefined <= 0); //[Output => false]
*/

// ***************************************************************************************************

// Strict Check[===] - Strictly check values and its datatypes
console.log("2" == 2); //[Output => true (Conversion occurs)]
console.log("2" === 2); //[Output => false (Conversion doesn't occur as the datatypes are different)]