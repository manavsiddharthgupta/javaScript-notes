// method

// function inside object
// use of .this 

const person = {
	firstName: "Manav",
	lastName: "Gupta",
	age: 19,
	gender : "male",
	about(){
		return `hi my name is ${this.firstName}${this.lastName} and my age is ${this.age}`;}
//about: function(){
//   return `hi my name is ${this.firstName}$   
//  {this.lastName} and my age is ${this.age}`;}
		
};

// this is a keyword that refers to an object from which the method is calling
// initially this is set to window object
// thats why developer we use "strict mode"

console.log(person.about()); //hi my name is ManavGupta and my age is 19   

// alternative way to declare method 

const person1 = {
	firstName: "Manav",
	lastName: "Gupta",
	age: 19,
	gender : "male"

};
person1.about = ()=>{
		return `hi my name is ${this.firstName}${this.lastName} and my age is ${this.age}`;
}

console.log(person.about()); 

const person2 = {
	firstName: "Manav",
	lastName: "Gupta",
	age: 19,
	gender : "male",
	about: info
};
function info(){
	console.log(" hello my name is",this.firstName);
}
// console.log(person2.about());


//----------------------------------------------Important------------------------------------------------
//1 Call

const person3 = {
	firstName: "Manav",
	lastName: "Gupta",
	age: 19,
	gender : "male"
}
// if you want to use method from differernt object you can use apply method
info.call(person3,"hi");


// 2 Apply is same as call but you can pass list by apply

// 3 Bind can do what call do but also can store function

const myfunc = person2.about.bind(person3,"hlo");
console.log(myfunc())


// we cant use this in arrow function because in arrow function this inside function gives iys lexical 
//-scope.
