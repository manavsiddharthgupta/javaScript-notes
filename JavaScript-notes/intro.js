 // basic concept
 // let vs var 
 // let is blocked scope and var  is function scoped/ globally scoped.

 // we generally use let instead of var

 var a = 5;
 

 {
	let b = 3;
	 a = 7;
 }
 //console.log(a,b); here a = 7, but b is not defined you can defined b i the scope though.

 const pi = 3.14;
 // you can,t change the value of pi it is constant


 // Strings method 
// 1. trim() 
let name = "   manav gupta  ";
name = name.trim();
console.log(name); // "manav gupta"

//2. toUpperCase()
name = name.toUpperCase();
console.log(name); // "MANAV GUPTA"

//3.toLowerCase();
// to make lowercase

//4. slice
name = name.slice(0,6);  // ) index were we start
console.log(name); // "MANAV"

// Primitive datatype
// 1.String
// 2.Number
// 3.booleans
// 4.undefined
// 5.BigInt