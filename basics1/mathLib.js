/*Unlike other objects, the Math object has no constructor.
The Math object is static.
All methods and properties can be used without creating a Math object first.
*/
console.log(`Eulers number is ${Math.E}`) //returns Eulers number
console.log(`Value of Pie is ${Math.PI}`)
console.log(`Value of  sq root of 1/2 is ${Math.SQRT1_2}`)
console.log(`Value of  sq root of 2 is ${Math.SQRT2}`)
console.log(`Value of log 2 is ${Math.LN2}`)

console.log(Math.round(98.3))
console.log(Math.round(88.7))
console.log(Math.ceil(98.3))
console.log(Math.floor(88.7))

console.log(Math.trunc(1234.987))// returns the non decimal part
console.log(Math.sign(-40))  //returns -1 for neg
console.log(Math.sign(0))    //returns 0 
console.log(Math.sign(40))   // returns +1 or simply 1

console.log(`the sqroot of 144 is ${Math.sqrt(144)}`)
console.log(`the absolute value of -11 ${Math.abs(11)}`)
//similarly we can use sin,cos

console.log(`the maximum value is ${Math.max(11,34,23,67,45)}`)
console.log(`the minimum value is ${Math.min(11,34,23,67,45)}`)

let min = 1, max = 6
console.log(`random number between 1 to 6 is ${Math.ceil(Math.random() * (max - min +1))} `)
// throwing a die randomly

console.log(Math.pow(6,3))
console.log()



