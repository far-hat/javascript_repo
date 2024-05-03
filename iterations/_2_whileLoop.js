let score = 50
while (score >0){

    console.log("Game Over. Try Again. ")
    score-=10;
}

let lives=3
do{
    console.log(`Remaining lives are ${lives}` )
    lives--
}while(lives>0)