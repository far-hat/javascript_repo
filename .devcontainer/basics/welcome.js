console.log("Welcome.")
//console.log is a function/method used to print on console.

let companyName ="Github"
console.log(companyName)
//let is used to declare a variable
//block scoped used since ecma6 ecma2015

var laptopBrand = "Dell"
console.log(laptopBrand)
//var is used to declare a variable is function scoped and is used in earlier versions 
//not using var is a better practice 

const laptopGen ="i7"
console.log(laptopGen)
//const is used to declare constants whose value never changes throughout the program
//if we try to change its value it shows an error

/* we can also declare variables in javascript without using let or var 
but its better not to use it*/

laptopRam="8GB"
console.log(laptopRam)
/* we can also declare a variable without initializing like*/
let laptopPrice
console.log(laptopPrice)
/* value for uninitialized variables is "undefined" */