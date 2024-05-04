const marks = [22,24,26,23,29]

let newMarks = marks.map( (num)=> num+15 )
console.log(newMarks)

newMarks =marks
    .map( (num) => num*10)
        .map( (num)=> num+2)
            .filter( (num)=> num>390)
console.log(newMarks);