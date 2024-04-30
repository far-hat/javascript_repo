const Employee =new Object() //singleton obj
Employee.id = "1x2y3z"
Employee.email = "abcdef@ymail.com"
Employee.isLoggedIn = false

//console.log(Employee)

const guestUser ={
    email : "lmnop@gmail.com",
    fullname :{
        firstname : "Panasonic",
        lastname : 'Company'
    }
}

//console.log(guestUser)


const obj1 = { 1: "a", 2:"b"}
const obj2 = {7:"g", 8:"h"}
//const obj3 =Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
//console.log(obj3);


console.log(Object.keys(Employee));
console.log(Object.values(Employee));
