
function identity(name){
    console.log(`My name is ${name}.`);
}

identity('John'); // Function call

// Sum of two numbers
function sum(a,b){
    console.log(`The sum of ${a} and ${b} is ${a+b}.`);
}
sum(5,6);

// Exam Result
function result(m1,m2,m3) {
    let sum = m1+m2+m3;
    if (sum>=120) {
        return `Congrats,You are passed.`
    }
    else{
        return `You are failed.`
        
    }
}

let Result = result(70,55,60)
console.log(Result);


// ---------- Arrow Function ----------

const arrow = (x)=>{
    console.log(`Arrow function.${x}`);
}
arrow(54);