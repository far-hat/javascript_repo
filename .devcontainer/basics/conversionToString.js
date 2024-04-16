"use strict";

// Program to convert different datatypes to string explicitly

let aNum = String(1996)       // number to string
console.log(aNum,typeof aNum) // 1996, string

let aBool = String(true)
console.log(aBool,typeof aBool) // 

let aNull = String(null)
console.log(aNull,typeof aNull)

let aUndef
console.log(aUndef,typeof aUndef) 
aUndef = String()
console.log(aUndef,typeof aUndef) 

let bNum = String(3+2)
console.log(bNum,typeof bNum) 


