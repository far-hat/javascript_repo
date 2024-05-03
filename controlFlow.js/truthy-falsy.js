/* 
   truthy values A value is considered truthy if,
    when coerced to a boolean, it evaluates to true. 
    Examples of truthy values include non-empty strings,
    numbers other than 0, arrays, objects, and functions.

           some data types that yeild truthy values
           even though they seem to yeild falsy values
   non empty string like "0" , "false" , " "
   empty arrays like []
   empty objects like {}
   empty functions like function (){}
*/
//*************************************** */

/*          Falsy values:
        Values that are not true are considered False 
        values. 0, -0 , (bigint) 0n
        null, undefined, NaN, false(Boolean
        value), and an empty string ("").


*/


let someArray = []
if(someArray.length === 0){ //check if array is empty
    console.log("Empty array");
}

let someObject = {}
if(Object.keys(someObject).length == 0){
    /*key method of Object class returns an array of
     key-value pairs. By checking the length of the 
     array we canfind out if an object is empty.*/
    console.log("Empty Object");
}

// Nullish coalescing Operator (??): null undefined
let val1 = 5??10
console.log(val1); //5
val1 = null ??10
console.log(val1); //10
val1 = undefined??15
console.log(val1); //15

val1 = null ?? 15 ?? 30 //15
console.log(val1);

//   Ternary operator
 // condition ? if true:if false
const iceAmericanoCost = 60
iceAmericanoCost >=50 ? console.log("Greater than 50"): console.log("Less than 50");
