// var has a global scope

let sum = 550 //global scope

if(true){
    let sum =90
   // console.log("Sum inside block is ",sum); //block scope

}

//console.log("Sum outside block is ",sum)
//#############################################

function one(){
    const username = "akash"
    function two(){
        const platform = "youtube"
        console.log("Inside two value of username ",username)
        //console.log("Inside two value of platform ",platform)
        }
        //console.log("Outside two value of platform ",platform)  // reference error cannot access platform outside block two
        two() // calling func two

}

//one() //func call

//**************** Hoisting */
console.log(greeting());
function greeting(){
    return `Welcome in greeting`
}

//console.log(leave()); //Reference error as the function below is stored in a variable or hoisted
//Cannot access leave before initializaton
const leave = function leaving(){
    return `Bye, I'm leaving`
}

console.log(leave())