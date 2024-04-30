let artsSub = ['History','Sociology','Education','Economics']
let genSub =['English','Urdu','Hindi']

// artsSub.push(genSub) //push returns the length of new array and takes the pushed array as single ele
// console.log(artsSub) //
//console.log(artsSub.concat(genSub)); // returns a new array
// spread operator  ...

let allSub = [...artsSub ,...genSub]
//console.log(allSub);

// const anotherArr =[1,2,3,[4,5,6],7,[8,9,[0,1]]]
// const realAnotherArr =anotherArr.flat(Infinity)
// console.log(realAnotherArr)

console.log(Array.isArray("Maliha")) // to check whether the given data is array type
console.log(Array.from("hiccups")) //to convert a non array type to array
console.log(Array.from({name:"Nielit"})) // if it cant convert to array then returns empty array

let score1=100,score2=200,score3=300
console.log(Array.of(score1,score2,score3))
//
