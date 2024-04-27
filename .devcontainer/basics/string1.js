"use strict";
//################# JAVASCRIPT STRINGS#########################
/* In JavaScript Strings represents sequence of characters
Strings can be declared either using let or const
Strings can also be declared by making an object of String class using new keyword
Strings must be enclosed in either single or double quotes or backticks
*/

let user1Name = "Rayaan " 
const user2Name = 'Maleeha' 
let user3Name = `Shayaan` //backticks
console.log(`Names of Users are: \n user 1 ${user1Name}  \n user 2 ${user2Name}  \n user 3 ${user3Name}`)

//Strings in JS are immutable and case sensitive

let user4Name = new String("Arhaan")
console.log(user4Name) 
user3Name = user4Name
console.log(` user 3 name ${user3Name}`)
user4Name ="arhaan"
console.log(user3Name==user4Name) // false as JS is case sensitive

let message = ' JavaScript treats strings as objects when executing methods and properties.'
console.log(message.length)  //returns length of string
console.log(message.charAt(12)) //returns character at specified index
console.log(message.charCodeAt(12)) //returns unicode value of char at specified index
console.log(message.endsWith('.'))  // checks if a string ends with specified string
console.log(message.includes('if')) // checks if specified string is in the string
console.log(message.indexOf('as')) //returns index of first occurence of specifies string
console.log(message.lastIndexOf('in')) //returns index of last occurence of specified substring
console.log(message.localeCompare('aS','as'))
/*The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

The current locale is based on the language settings of the browser.
*/
console.log(message.match('in'))

console.log(message.matchAll('ti'))

