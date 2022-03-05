//      Strings

// string concatenation - 
// declaring variable using camelCase
let firstName = "Manav";
let lastName = "Gupta";
let fullName = firstName + " " + lastName;
console.log(fullName);

let string1 = 12;
let string2 = "a";
let total = string1+string2;
console.log(total);

// Javascript has error
let nothing  = null;
console.log(typeof nothing);// this will give object instead of null this is an error


// --------------------------------------------------
              //  == vs ===
let num1 = 7;
const num3 = num1;
let stringofnum = '7';
let num2 = 7;
 // === checks the type of variable not the value of variable and reference.
 //=== checks the value of value
 console.log(num1 == num2);  // expected: true because '==' check value it doesnot care if its string or number 
 num2 = 5;
 console.log(num1 === stringofnum);//expected: true because === is used for comparing two variables, but this operator also checks datatype and compares two values.

 const name = "manav gupta";
 const firstname = name.slice(0,5);
 const lastname = name.slice(6,name.length);  // name.length is a proprerty.
 console.log(firstname+lastname);     // string concatenate.

//--------------------------------------------------------------------------------------------------
// template string

console.log(whatsMyAge); // hoisting we will learn later.
var whatsMyAge = 23;
const whoami = "Manav Gupta";
console.log(callme(whatsMyAge, whoami));

function callme(age, name){
    return `My name is ${name} and my age is ${age}`;   // template.
}

//-------Important

// const check; ---> const must be declared
// console.log(check);

if (whoami[0] === 'M') {
    console.log("first character of your name start with 'M' ");
}