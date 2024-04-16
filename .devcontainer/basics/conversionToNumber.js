"use script";
// explicit type conversion


/* Converting data types to number */
let empName="Abc"
console.log(typeof empName)
empName= Number(empName)
console.log(typeof empName)

let empId="321"
console.log(typeof empId)
let empStatus= true
console.log(typeof empStatus)
let empSalary
console.log(typeof empSalary)
let empBonus=null
console.log(typeof empBonus)

console.log("After conversion datatypes are ")
empId= Number(empId)
console.log(typeof empId)
empStatus=  Number(empStatus)
console.log(typeof empStatus)
empSalary =  Number(empSalary)
console.log(typeof empSalary)
empBonus=  Number(empBonus)
console.log(typeof empBonus)