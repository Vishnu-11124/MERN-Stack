
//---------- Conditional statement ----------


// -------- If..Else Statement --------

let age = 25

if (age>18){
    console.log("You can drive.");
}
else{
    console.log("You can't drive..");
    
}

// Arithmetic Operator [ +, -, /, *, **, //, % ]

// Assignment Operator [ =, +=, /=, -=, *=, %=, **= ]

// Comparison Operator [ ==, <, >, <=, >=, !=, ===, !==, ? ]

let a = 20
let b = 30
let c = a>b ? (a-b) : (b-a) // Ternery operator
console.log(`The difference is ${c}`);


// Logical Operator [ &&, ||, ! ]


// -------- If..Else Ladder --------

if (age<18){
    console.log("You can't drive.");
}
else if (age>=60){
    console.log("You should avoid driving..");   
}
else{
    console.log("You can drive."); 
}
