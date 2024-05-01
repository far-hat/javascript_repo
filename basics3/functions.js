function makeTea(){
    console.log("Take a cup of warm water")
    console.log("Soak a tea bag in it ")
    console.log("Add honey")
}
// makeTea //reference of function
// makeTea()

function multiply (num1,num2){
    console.log(num1*num2)// only prints returns nothing
}

// multiply(5,8) //40

// multiply(4,'7') //28

// multiply('a',2) //nan
// multiply(9,false) //0
// multiply(9,true) //9

function addTwoNum (n1,n2){
    return n1+n2
}

let sum=addTwoNum(4,5)
//console.log(`Sum is ${sum}`)

function logInUserMessage (username){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

//console.log(logInUserMessage(""))// if no string is entered it is undefined


//console.log(logInUserMessage("nobita") )

function greetings(guest= "Guest"){  //default args
    console.log(`Welcome ${guest}. Kindly feel at home`);
}

// console.log(greetings());
//console.log(greetings("Ink"));


/* ######### Rest operator ####### */

function calculateCartPrice (...price1){
    return price1
}
console.log(calculateCartPrice(250,90,75,110)) 

const Student ={
    StudentName : "Hafsa",
    StudentCode : 1234
}

function handleObject(someObject){
    console.log(`Username is ${someObject.StudentName} and Student iD is ${someObject.StudentCode}`)
}

handleObject(Student)// passing object reference

handleObject({
    StudentName:"adirah",
    StudentCode : 5678
}) //declaring object in  func call

//############ Passing array to func #################
const anArray = [55,88,44,99]
function returnThirdValue(getArray){
    return getArray[2]
}

console.log(`Third array element is ${returnThirdValue(anArray)}`) //passing array reference
console.log(`Third array element is ${returnThirdValue([60,50,30,70])}`) //passing array in func call