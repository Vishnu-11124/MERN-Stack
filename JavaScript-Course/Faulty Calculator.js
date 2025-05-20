/* Create a faulty calculator using JS

This faulty calculator does following:

1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of the times.

*/

// let number1 = Number(prompt(`Enter the first number: `))
// let number2 = Number(prompt(`Enter the second number: `))

let number1 = 10
let number2 = 22

let random = Math.random() * 10
console.log(random);

if (random >= 3){
    result1(number1,number2);
}
else{
    result2(number1,number2);
}


function result1(number1,number2){
    let choice = '+'
    if(choice== '+'){
        console.log( number1 + number2);  
    }
    else if (choice == '-'){
        console.log( number1 - number2); 
    }
    else if (choice== '*')
    {
        console.log( number1 * number2); 
    }
    else if(choice=='/'){
        console.log( number1 / number2); 
    }
}

function result2(number1,number2){
    let choice = '-'
    if(choice== '+'){
        console.log( number1 - number2); 
    }
    else if (choice == '-'){
        console.log( number1 / number2); 
    }
    else if (choice== '*')
    {
        console.log( number1 + number2); 
    }
    else if(choice=='/'){
        console.log( number1 ** number2); 
    }
}



