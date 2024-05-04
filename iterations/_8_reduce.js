const vidLength = [19,41,28,21,94,37,19,41,30,51,19,32,48,13,27,11,20,31,27,7]

console.log("Hours left of playlist are ")
let mins = vidLength.reduce( (start,time)=>start+time,0)
console.log(`${mins/60} hours `);


const shoppingCart = [
    {
        itemName : "Dell Laptop",
        price : 19000
    },
    {
        itemName : "DEll Wireless Mouse ",
        price : 579
    },
    {
        itemName : "Amazon Echo Dot (5th Gen)",
        price : 4949
    },
    {
        itemName : "data science course",
        price : 5999
    }
]

let cartPrice = shoppingCart.reduce( (bal,item)=> bal+item.price,0)
console.log(cartPrice);