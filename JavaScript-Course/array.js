
/*
------------------------ Array ------------------------
- Arrays are mutable (changable)

*/

// let arr = [1,2,3,4,5] // simple array
// console.log(arr);

// // Changing first value of the array from 1 to 27
// arr[0] = 27
// console.log(arr); // After changing value

// console.log(`Array length : ${arr.length}`);

// // toString() -> Converting array to string  
// console.log(`Converted string from array : ${arr.toString()}`);

// // join() -> Joining all the array elements using a seperator 
// console.log(`Using join : ${arr.join(' and ')}`);

// // pop() -> Removes last element from the array
// let newArray = [20,30,44,78,65]
// console.log(`Removed element : ${newArray.pop()}`);
// console.log(`After removing : ${newArray}`);

// // push() -> Adding new element to the end of the array 
// console.log(`Array : ${arr}`);
// arr.push(64)
// console.log(`Added new value : ${arr}`);

// // shift() -> Removes first element from the array
// console.log(`Removed element : ${newArray.shift()}`);
// console.log(`After removing : ${newArray}`);

// // unshift() -> Adding new element to the start of the array 
// console.log(`Array : ${arr}`);
// arr.unshift('harry')
// console.log(`Added new value : ${arr}`);

// // delete -> Deleting array elements.But the array length remain same because there is  a memory located for that element.
// console.log(`Array : ${arr}`);
// console.log(`Length : ${arr.length}`);
// console.log(arr[6]);
// delete arr[6] // Deleted element
// console.log(`Length : ${arr.length}`); // But the length remain same
// console.log(arr[6]); // There is no element

// // concat() -> Joining arrays and return new array but does not change the existing array.
// console.log(`New Array : ${arr.concat(newArray)}`);

// splice() -> Used to add new item to an array
// let myArray = [29,56,76,434,78]
// console.log(`Myarray : ${myArray}`);
// myArray.splice(0,3) // Removing items 29,56 and 76 from array
// console.log(`Myarray : ${myArray}`);

// let myArray1 = [29,56,76,434,78]
// console.log(`Myarray1 : ${myArray1}`);
// myArray1.splice(0,3,567,98,88) // Removing items 29,56 and 76 from array and also adding values
// console.log(`Myarray1 : ${myArray1}`);

// slice() -> Slice out a piece from an arrayand it creates a new array.
// console.log(`Myarray : ${myArray}`);
// let newOne = myArray.slice(0,3) // Selecting elements 29,56 and 76 from array
// console.log(`Sliced array : ${newOne}`);



//------------------------ Loops in Array ------------------------

let a = [1, 93, 5, 67, 8, 11]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);   
}