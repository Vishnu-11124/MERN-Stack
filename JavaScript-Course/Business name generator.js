//---- Business name generator by combining list of adjectives, shop names and another word
/*

Adjectives: Crazy, Amazing, Fire

Shop names: Engine, Foods, Garments

Another word: Bros, Limited, Hub

*/

let adjectives={
    1:'crazy',
    2:'amazing',
    3:'fire'
}

let shopName = {
    1:'engine',
    2:'foods',
    3:'garments'
}

let anotherWord = {
    1:'bros',
    2:'limited',
    3:'hub'
}

let random = Math.random() * 10
let first;
if (random<=3)
{
    first=adjectives[0]
}
else if(random<=6 && random>3){
    first=adjectives[1]
}
else{
    first=adjectives[2]
}

let random1 = Math.random() * 10
let second;
if (random1<=3)
{
    second=shopName[0]
}
else if(random1<=6 && random1>3){
    second=shopName[1]
}
else{
    second=shopName[2]
}

let random3 = Math.random() * 10
let third;
if (random3<=3)
{
    third=anotherWord[0]
}
else if(random3<=6 && random3>3){
    third=anotherWord[1]
}
else{
    third=anotherWord[2]
}
    
console.log(random);
console.log(random1);
console.log(random3);

console.log(`Business Name : ${first} ${second} ${third}`);
