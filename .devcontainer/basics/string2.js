let message = "You can use the backslash escape character \ to include special characters in a string."
/*to slice a string we pass two args the starting and ending index
The starting index must always be less than ending index.
The end index character is excluded.
*/

console.log(message.slice(5,15))

console.log(message.slice(-10,-5))

console.log(message.slice(-25,-1))
