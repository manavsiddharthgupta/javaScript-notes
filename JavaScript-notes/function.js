// Function

// function name(parameter){
// 	console.log("body");
// }

function wave(){     // this is called function declaration.
    return "hello";
 }
 console.log(wave);  // because we are returning something
//-----------------------------------------------------------------------------------------

 // function expression 
 
 const exp = function(){
     console.log("this is function expression");
 }
 exp(); // calling function
//------------------------------------------------------------------------------------------

 // Arrow function 
 
 const arrowfunc = ()=>{
     console.log("this is an arrow function");
 };
arrowfunc();
//-----------------------------------------------------------------------------------------

// lexical Scope
let num1 = 12;
const may = ()=>{
	a()
	function a(){
		console.log("hello",num1);
		let num3 = 69;
		b();
		function b(){
			console.log("this is fuction b",num1,num3)
		}
	}
}

// may();
// console.log(num3);  this will give not defined becuse num3 is not in lexical scope


// default parameter

const wave1 = (name = "manav")=>{
	console.log("hello my name is ",name);
}
//wave();
// here wave has default parameter--> name 

// Rest parameter
const rest = function(...arr){
	console.log(arr);
}
rest(1,2,2,3,3,3);


// pararm destructuring

const user = {
	userId: 2,
	name: "manav gupta",
	gender: "male"
};

const param = ({userId,name,gender})=>{
  console.log("hi my name is ",name,"and my user id is ",userId," and ",gender);
};
param(user); // not forget to pass argument the object you have destructured

//  call back function

const func1 = (func2)=>{
	console.log("thi is func1");
	func2("manav");
}
const func2 = (name)=>{
	console.log("this is func2",name);
}
func1(func2);

const closure = function(firstname,lastname){
    let fullname = firstname + lastname;
    function call(){
        console.log(fullname);
    }
    return call;
}
const myfunctioncall = closure("manav","gupta");
myfunctioncall();