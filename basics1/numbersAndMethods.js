"use strict";

// const number1= 1996;
// console.log(number1)

// const number2 =new Number(1999)
// console.log(number2);

// let balance = 1234.57
// console.log(balance.toString().length)
// console.log(balance.toFixed(1)) // rounds up 1234.57 to 1234.6
// let balance2 =98765.4381
// console.log(balance2.toPrecision(4)) //9.877e+4
// console.log(balance2.toPrecision(6)) //98765.4
// console.log(balance2.toPrecision(8))  //9786.438

// let netWorth = 12000000
// console.log(`Networth of Raeon is ${netWorth.toLocaleString()} in Dollars`)
// console.log(`Networth of Raeon is ${netWorth.toLocaleString('en-IN')} in INR`);

// console.log(netWorth.valueOf())// returns primitive value of specified object

// //##################### use of + operator for concatenation  ###################
// let x = "10", y = "20"
// console.log(x+y) //1020 as it is concatenated
// console.log(55+x) //5510 concatenated
// console.log(x+55) //1055 concatenated
// console.log(y.valueOf())  //returns 20
// console.log(typeof(y))    //string

// let z = new Number(44)
// console.log(z+x) //4410 cocatenated
// console.log(z+55) //99
// console.log("result of z+ 55 is "+z+55) //4455 concatenates as a
// sttring not  even though both are numbers


//0000000000000000000000000000000 number properties

console.log(Number.EPSILON) 
/*The value of Number.EPSILON is the difference between 1 
and the smallest value greater than 1 that is representable
 as a Number value, which is approximately:*/
 //console.log(10.EPSILON) //invalid token)

 console.log(Number.MAX_VALUE)
 console.log(Number.MIN_VALUE)
 console.log(Number.MAX_SAFE_INTEGER)
 console.log(Number.MIN_SAFE_INTEGER)
 console.log(isFinite("NaN")) // Infinite (not finite) numbers are Infinity, -Infinity, or NaN
 //isFinite() converts the value to a number before testing it.
console.log(isFinite(""))
