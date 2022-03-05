//             Arrays
// Arrays consist of num, string, char all primitive data and object 
let mixed = ["1",1,"2.3",2.3,"hi",null,undefined];
console.log(mixed);

//-----------------------------------------------------------------------------------------

// Some arrays method
let fruits = ["apple","mango","grapes"];

//1. push
fruits.push("banana");
// it will push to last 
console.log(fruits); // expected: [ 'apple', 'mango', 'grapes', 'banana' ]

//2. pop
let poped = fruits.pop();
//it will poped from last
console.log(fruits); // expected: [ 'apple', 'mango', 'grapes' ]

// 3. unshift
// it will push to first index
fruits.unshift("orange");
console.log(fruits); // expected: [ 'orange','apple', 'mango', 'grapes' ]

// 4. shift
// it will pop from first index
let shifted = fruits.shift("orange");
console.log(fruits); // expected: [ 'apple', 'mango', 'grapes' ]


//-----------------------------------------------------------------------------------------------------

//   Primitive           vs          Reference

//   strings,number,...                array,object

//   immutable                         mutable


//                  cloning

// Since array is reference type 
let arr1 = [1,3,4,5,77,8,2];
let arr2 = arr1;
// arr2 and arr1 pointing to same object i.e [1,3,4,5,77,8,2] in heap memory 
// if you want to clone arr1 in arr2

//1. we can use slice method
arr2 = arr1.slice(0);
console.log(arr2);// expected: [1, 3, 4, 5, 77, 8, 2]

//2. we can use concatenation method 
let arr3 = [].concat(arr2);
console.log(arr3);// expected: [1, 3, 4, 5, 77, 8, 2]

//3. or we can use spread operator
let arr4 = [...arr1];
console.log(arr4);// expected: [1, 3, 4, 5, 77, 8, 2]
//----------------------------------------------------------------------------------------

// use const creating array because arrays are mutable
// we can push or pull any element or change but not able to change to reference to the new object. 
// we are changing the object not the reference variable object are mutable
const newarr = [121,23,226,"hi",'s21',8.11];
// newarr = ["helo",1,"33"];
// console.log(newarr); this will gave us error bvecause we have assigned to a const.

//---------------------------------------------------------------------------------------------------

//    for in and for of loop

// 1. for
for(let i = 0; i <= newarr.length-1; i++){
	console.log(newarr[i]+" "+i);
}

// 2. for of loop
for(let i of newarr){
	console.log(i);
}
// this for of loop print all the element 
// we will use for of loop most

//3. for in loop or simple for loop
for(let i in newarr){
	console.log(i);// works ame as simple for loop
}


// Arrays destructuring
//const--> for type of data
// [variablename1, variablename2,...arraylistname]

const [no1, no2, ...rest] = newarr;
console.log(no1);
console.log(no2);
console.log(rest);


