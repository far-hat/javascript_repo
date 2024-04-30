//singleton

////object literals
const mySym = Symbol("key2")
// console.log(typeof mySym);
const Student ={
    stuName : 'Aaminah',
    age : 22,
    //mySym : "mykry2",
    [mySym] :"mykey2",
    location : "Srinagar",
    email: "aaminah@xyz.com",
    isLoggedIn : 'true'
}
// console.log(Student.email)
// console.log(Student["email"])
// console.log(Student[mySym]+ " and type is"+typeof Student[mySym])
Student.location = "Rangreth"
//console.log(Student)
//Object.freeze(Student)
Student.location = "Lalchowk"
//console.log(Student)

Student.greeting = function(){
    console.log(`Welcome Student ${this.stuName}`)
}

console.log(Student.greeting())
