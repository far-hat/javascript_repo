const companies = ['Google', 'Amazon', 'Samsung', 'Oracle']
/* A function that accepts up to three arguments. 
forEach calls the callbackfn function one time for
 each element in the array.
Performs the specified action for each element in
 an array
 Call back function dont have name ? */
companies.forEach(function (item){
    console.log(item)
})

//also can be used with arrow functions

// companies.forEach( (cname) => {
//     console.log(cname);
// })

//parameters of for each

companies.forEach( (cname,index,arr)=>{
    console.log(cname,index,arr);
})

const studentDetails =[
    {
        Name : 'Aaminah',
        RollNo : 123,
        Course : 'JS'
    },

    {
        Name : 'Bisma',
        RollNo : 234,
        Course : 'SQL'
    },

    {
        Name : 'Insha',
        RollNo : 345,
        Course : 'java'
    }
]

studentDetails.forEach( (item)=>{
    console.log(`Student name is ${item.Name}`);
    console.log(`Student Course is ${item.Course}`);
    console.log(`Student Roll no is ${item.RollNo}`);

})