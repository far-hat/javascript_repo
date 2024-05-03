/* 
Commonly Used Comparison Operators
Operator	Meaning	Example
==	Equal to	            3 == 5  // false
!=	Not equal to	        3 != 4  // true
===	Strictly equal to	    3 === "3"  // false
!==	Strictly not equal to	3 !== "3"  // true
>	Greater than	        4 > 4  // false
<	Less than	            3 < 3  // false
>=	Greater than/equal to	4 >= 4  // true
<=	Less than or equal to	3 <= 3  // true
*/

function season(month){
    if(month == 'Dec'|| month== 'Jan' || month == 'Feb'){
        console.log("Winter season")
        return
    }
    else if(month == 'Mar'|| month== 'Apr' || month == 'May'){
        console.log("Spring season")
        return
    }
    else if(month == 'Jun'|| month== 'July' || month == 'Aug'){
        console.log("Summer season")
        return
    }
    else if(month == 'Sep'|| month== 'Oct' || month == 'Nov'){
        console.log("Autumn season")
        return
    }
    else{
        console.log("Wrong input. Try again");
    }
}

season("May")

const balance = 1500
if (balance>1500) console.log("Sufficient balance "); //shorthand notation

const userLoggedIn =true
const debitCard =true
if(userLoggedIn && debitCard){
    console.log("Allow to purchase ");
}
