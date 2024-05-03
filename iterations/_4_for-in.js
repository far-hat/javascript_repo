const member ={
    memberName : 'Abdullah',
    membershipID : 'Premium',
    validTill : 2025
}
//for in loop 
for (const key in member) {
        console.log(`${key} :  ${member[key]}`);
 }

const channels = ['AJ','NDTV','Wion','BBC']
for (const key in channels) { 
        console.log(channels[key])
    }

 const countryCodes = new Map()
 countryCodes.set('+86','China')
 countryCodes.set('+852','Hong Kong')
 countryCodes.set('+81','Japan')
 countryCodes.set('+82','South Korea')


 ///maps are basically not iterable so for in doesnt work
  for (const key in countryCodes) {
    console.log(`Country is ${Object[key]} and code is ${key}`);
 } 
    