// Object (reference type like array)

//Arrays are good but not sufficient in real word.
//object stored Key value pairs in heap memory
// object doesn't have index
// or object literals -A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.

const person = {
	name: "Manav gupta",
	"age": 19,
	gender: "male",
	about(){
		return `hi my name is ${this.name} and my age is ${this.age}`;
	}
};

// how to access data from object
console.log(person.name);
//or
console.log(person["name"]);
// we can add arrays in object
console.log(person.about());

const user = {
	name: "manav gupta",
	"age": 19,
	gender: "male",
	hobbies: ["cycling","coding","singing"],
};
// adding properties in object
user.newobject = "brand new object obv";
// console.log(user.newobject);
// console.log(user)

// iterating object 


// use for of loop 
// now object.keys(user) gives arrays of keys

for(let i of Object.keys(user)){
	console.log(user[i]);
}

// using spread in object
const updateuser = {...user,...person};
console.log(updateuser);

// object destructuring

let {name:fullname,age,gender,...arr} = updateuser;
console.log(fullname);
console.log(age);
console.log(gender);// variable
console.log(arr);// object


// object inside array
// very usefull in real world application

const allUser = [
                 {id:"1",name:"manav",class:'S'},
                 {id:"2",name:"vikush",class:'A'},
                 {id:"3",name:"akash",class:'A-'},
                 {id:"4",name:"rahul",class:'S+'}
                                                 ];
console.log(allUser);
// you can print using for of , for loop also forEach
allUser.forEach((user)=>{
    console.log(user.id*2);
})

const [user1,{id,name:firstname}] = allUser;
console.log(user1);
console.log(id);
console.log(firstname);