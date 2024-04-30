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