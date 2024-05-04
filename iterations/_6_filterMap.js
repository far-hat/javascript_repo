const models = ['j','a','m','s']
const values = models.forEach( (mname)=>{
    return mname

})
console.log(values) // as we can see forEach doesnt return anything

const myNums = [9,8,7,6,5]
let newNums = myNums.filter( (num)=> num>7)
console.log(newNums)
/* filter : Returns the elements of an array that meet the 
condition specified in a callback function.
The above can be written as:
let newNums = myNums.filter( (num)=> {
    return num>7
    })

if we dont specify return keyword after curly braces 
then an object will return which will be empty.
*/

let marks = [22,24,26,23,29]
const newMarks = []
marks.forEach( (item)=>{
    if(item>24){
        newMarks.push(item)
    }
})
console.log(newMarks)

const books = [
    { title: 'Book One' , genre: 'Fiction' ,publish: 1981 , edition: 2004},
    { title: 'Book Two' , genre: 'Non-Fiction' ,publish: 1992, edition: 2008},
    { title: 'Book Three' , genre: 'History' ,publish: 1999, edition:2007 },
    { title: 'Book Four' , genre: 'Non-Fiction' ,publish: 1989, edition: 2010},
    { title: 'Book Five' , genre: 'Science' ,publish: 2009, edition: 2014},
    { title: 'Book Six' , genre: 'Fiction' ,publish: 1987, edition: 2010},
    { title: 'Book Seven' , genre: 'History' ,publish: 1986, edition: 1996},
    { title: 'Book Eight' , genre: 'Science' ,publish: 2011, edition: 2016},
]

let userBooks = books.filter( (book)=> book.genre ==='History')

//console.log(userBooks)

userBooks = books.filter( (book)=> book.publish>=2000)
//console.log(userBooks);

userBooks = books.filter( (book)=> book.edition<=2004 && book.genre==='Fiction')
console.log(userBooks);