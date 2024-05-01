//simple func
function connection(){
    console.log("Database connected")
}

connection(); 

//Immediately invoked functions

(function disconnect(){
    console.log("Database disconnected")
})();    //semi colon is needed because iife invokes a function but doesnt know where to stop
// so we have to explicitly put a semi colon at the end of call

//iffe using arrow functions
(  (name) =>{
    console.log(`Dtabase connected again ${name}`)
}
) ("mehnaz");