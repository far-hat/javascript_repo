let userName = "Rahee"
console.log(userName.padEnd(10,'*'))  //pads a string at end until it reaches given length
console.log(userName.padStart(10,'*')) //pads a string at begin until it reaches given length
console.log(userName.repeat(4))       //repeats a string given number of times
console.log(userName.replace("a","u")) //replaces 
console.log(userName.replaceAll("e",'i')) //replaces all occurences



let message = "You can use the backslash escape character \\ to include special characters in a string."
console.log(message.search("in"))
/*to slice a string we pass two args the starting and ending index
The starting index must always be less than ending index.
The end index character is excluded.
*/
console.log(message.slice(5,15))
console.log(message.slice(-10,-5))
console.log(message.slice(-25,-1))

console.log(message.split(' ')) //splits a string 

console.log(message.startsWith(" ")) //checks if string starts with specified string/char
console.log(message.substring(20,25)) //returns a substring but not with negative indices
console.log(message.toLowerCase())
console.log(message.toUpperCase())
console.log(message.trim())  //trims whitespaces before and end of string
console.log(message.valueOf('to')) //samjh nhi aaya

