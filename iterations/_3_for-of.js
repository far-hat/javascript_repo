///////// for of

const arr = [22,33,44,55,66]
for(const num of arr){ //of what we want to iterate
    console.log(num)
}

//       Maps 
const countryCodes = new Map()
countryCodes.set('+86','China')
countryCodes.set('+852','Hong Kong')
countryCodes.set('+81','Japan')
countryCodes.set('+82','South Korea')

for (const [code,name] of countryCodes) {
    console.log(`${name} : Code is ${code}`)
}

//  for of use in objects

const member ={
    memberName : 'Abdullah',
    membershipID : 'Premium',
    validTill : 2025
}
/*
for (const [name,id,year] of Object.keys(member)) {
    console.log(`Member Name is ${name} `)
    console.log(`Member ID is ${id} `)

    console.log(`Membership valid till  ${year} `)

}

for of doesnot work with objects
*/
