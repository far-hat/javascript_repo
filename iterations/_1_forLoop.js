function multiplicationTable(number){
    for(let i =1; i<=5; i++){
        console.log(`${number} x ${i} = ${number * i}`)
    }
}
//multiplicationTable(6)
//console.log(i);; // i isnt accessible outside for

// for(let x=0;x<5;x++){
//     for(let y = 0; y<x; y++){
//         console.log("😄  ")
//     }
//     console.log("")
// }

let rooms = ['bedroom' , 'bathroom' , 'kitchen' , 'study' , 'Living']
for(let z =0;z<rooms.length;z++){
    console.log(rooms[z]);
}

//break and continue

for(let i =1 ; i<20 ; i++){
    if(i==5 || i == 15){
        continue;
    }
    if(i==10){
        break;
    }
    console.log(i);
}