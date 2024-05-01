const user ={
    username : 'Bisma',
    fee : 99,

    welcomeMessage : function (){
        console.log(`Welcome ${this.username} to the website. `)
        console.log(this);
    }
}

//user.welcomeMessage()
//console.log(this); //prints emty obj

function write(){
    let book = "math"
    console.log(this.book);// this is used with obj not func
}

write()

const watch =function(){
    let scene = "mountains"
    console.log(this.scene); //this; doesnt work with hoisting as well

}

watch()

//___________________ Arrow func


const play = () => {
    let game = "basketball"
    console.log(game)
}

play()

////////////////////////////////

const multiplyTwo = (n1,n2) => n1*n2
console.log(multiplyTwo(5,7)
);
