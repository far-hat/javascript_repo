/* A JavaScript date defines the EcmaScript epoch that
 represents milliseconds since 1 January 1970 UTC.
//  */
// let dateOfAdmission = new Date();
// console.log(dateOfAdmission);

// console.log(`Date is ${dateOfAdmission.getDate()}`)
// console.log(`Year is ${dateOfAdmission.getFullYear()}`)
// console.log(`Milliseconds are ${dateOfAdmission.getMilliseconds()}`)
// console.log(`Minutes are ${dateOfAdmission.getMinutes()}`)

// console.log(`Date of Admission is ${dateOfAdmission.toDateString()}`)
// console.log(dateOfAdmission.toString());
// console.log(dateOfAdmission.toLocaleString());
// console.log(typeof(dateOfAdmission));

const dateOfBirth = new Date(2016,11,15) // month in JS starts from 0 for Jan if single digit 0
console.log(dateOfBirth);
console.log(`Date of Birth is ${dateOfBirth.toDateString()}`)

let resultDate = new Date("01-01-2024")
console.log(resultDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.round(Date.now()/1000))

let newDate = new Date()
newDate.toLocaleString("ar-SA", 
    { 
        weekday : "narrow"

})

console.log(`Saudi Arabia Date is ${newDate} and time is
 ${newDate.getUTCHours()} : ${newDate.getUTCMinutes()}`)