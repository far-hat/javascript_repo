//array

let marks = [56,44,58,38,28,59,30]
const subjects = ['C++','SE','WD','AI','python','Cryp','Acc']

let subCode = new Array(11,22,33,44,55,66,77)//declaration using Array const
// console.log(subCode)

let students = ['Aaminah','Bisma','Farhat']
// console.log(students)
 students.push("Insha","Snober","Shabnam")
// console.log(students)
students.pop()
// console.log(students)

// console.log(`before insertion at front ${subCode}`)
// subCode.unshift(0)//inserts new elements at the start of an array, and returns the new length of the array.
// console.log(`After insertion at front ${subCode}`)

// subCode.shift()//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(`After deletion at front ${subCode}`)

let rollNos = [123,234,345,456,567,678,789]
let joinedArr= rollNos.join('-')
/* The join() method of Array instances creates and returns 
a new string by concatenating all of the elements in this
 array, separated by commas or a specified separator string.
  If the array has only one item, then that item will be 
  returned without using the separator.*/
 // console.log(rollNos)
  //console.log(joinedArr); 

// console.log('A ',rollNos) //array A before slice
// console.log(rollNos.slice(1,4))
// console.log('B ',rollNos); //array after slice and before splice
// console.log(rollNos.splice(1,4))
// console.log('C ',rollNos); //array after splice

//lets understand with few more examples
//splice syntax    splice(start, deleteCount, item1, item2, /* …, */ itemN)
let A = ['a','b','c','d','e']
console.log(A) //original array
// console.log(A.splice())
// /*If start is omitted (and splice() 
// is called with no arguments), nothing is deleted. 
// This is different from passing undefined, which is converted to 0 */
// console.log(A)
// console.log(A.splice(1))//it removed all elemnts from index 1 and returned them
// console.log(A) // the resultant original array conatins only 'a'

//console.log(A.splice(1,3)); //removed elemnts from array
//console.log(A); //original array after splice with delete count

console.log(A.splice(1,3,'x','y','z','l','m')) 
console.log(A) //org array after splice with items
/* original array : a,b,c,d,e
   new result :     a,x,y,z,l,m,e */
