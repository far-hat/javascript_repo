"use strict"; //treat all code as newer version- a better practice

/* while using node we dont use "" alert" as we used in the browser 
as the code was treated there as document 
Example if  we type :
alert(2+1)  node will throw error that alert is not defined */

/* JAvascript is dynamically or loosely typed that is
JavaScript automatically determines the variables' data type for you.
It also means that a variable can be of one data type and later 
it can be changed to another data type. */


let cname = "Github" //string datatype represents textual data

let userId = 112233 //number datatypes represents intor floating point numbers. 2^53= 9007199254740992

let population = 9007199254741000n  // bigint represents int with arbitrary precision number is followed by n

let flag = true // boolean datatype

let x // undefined a variable whose datatype is not defined yet

let count=null // denotes a null value it sis a  standalone value

let message = Symbol('Hello this is a Symbol which is unique and immutable') 
//Symbol datatype represents a dattype whose instance is unique and immutable

let employee = {};//object data type used to declare oblects

console.log(cname,userId,population,flag,x,count,message)

console.log(typeof(message)) //typeof method is used to check the dattype of a variable
console.log(typeof(population)) //typeof method is used to check the dattype of a variable

console.log(typeof null) // gives object
console.log(typeof undefined) // gives undefined
console.log(typeof cname) // gives string