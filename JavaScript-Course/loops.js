
//---------- Loops ----------

// ---------- For Loop ----------

let number=1
for(number; number<=10; number++){
    console.log(number);   
}

// ---------- For in Loop ----------

let object={
    name:"anu",
    age:24,
    job:"teacher",
    salary:25000
}

for (const key in object) {
    const element = object[key];
    console.log(key,element);
}

// ---------- For of Loop ----------

for (const element of "James Bond") {
    console.log(element); 
}

// ---------- While Loop ----------

let age = 2
while (age<10) {
    console.log(age);
    age++;    
}

// ---------- Do While Loop ----------

let mark = 20;

do {
    console.log(mark);
    mark++;
} while (mark<18); // Condition is false but statement is printed.