// // Create function to create multiple object


// // first lets create method inside an object.  
// function info()
// {
// 	return "hi my name is "+ this.firstName + this.lastName + ".";
// };

// const user = {
// 	userId: 1,
// 	firstName: "manav",
// 	lastName: "gupta",
// 	admId: "2006468",
// 	age: 17,
// 	bio: info
// };

// // console.log(user.bio());

// // what if we want to create thousands of users we have to write user object thousands times 
// // here comes function to create an object


// // lets create a func to make a template

// function users(userId,firstName,lastName,admId,age){
// 	const user = {};
// 	user.userId =  userId;
// 	user.firstname = firstName;
// 	user.lastname = lastName;
// 	user.admid = admId;
// 	user.age = age;
// 	user.bio = function(){
// 		return "hi my name is "+this.firstname + this.lastname+ ".";
// 	}
// 	user.is18 = function(){
// 		return this.age > 18;
// 	}
// 	return user            // remember using return because you are not using new keyword
// };

// const manav =users(1,"manav","gupta","2006468",19);
// console.log(manav);
// // expected output : users {
// //   userId: 1,
// //   firstname: 'manav',
// //   lastname: 'gupta',
// //   admid: '2006468',
// //   age: 18,
// //   bio: [Function (anonymous)]
// // }


// // problem with this is if we create 1000 user there will be 1000 bio method.
// // thats were proto came.

// // ----------------------------------------------
// // important
// // use of proto is very important when you use method in object
// // __proto__ -----> storing in different object and use proto not prototype



// const protocreateuser = {
// 	bio(){
// 		return " hi my name is " + this.firstName + " " + this.lastName + "."
// 	},
// 	is18(){
// 		return this.age > 17 
// 	}
// }

// function Createusers(firstname,lastname,userid,age,gender,gmail){
// 	const user = Object.create(protocreateuser); // remember using object.create to use proto
// 	user.firstName = firstname;
// 	user.lastName = lastname;
// 	user.userId = userid;
// 	user.age = age;
// 	user.gender = gender;
// 	user.gmail = gmail;

// 	return user;    // remember using return because you are not using new keyword
// }
// const varun = Createusers("varun","raj",18,19,"male","varunraj@gamil.com");

// console.log(varun.bio());

// // proto and prototype are different

// // javeScript function  ==> work as function as well as object
//   //  now this is called prototype 
// 	// function and arrays both have prototype but we use function for prototype;



// function createuser(firstname,lastname,userid,age,gender,gmail){
// 	const user = Object.create(createuser.prototype); // remember using object.create to use proto
// 	user.firstName = firstname;
// 	user.lastName = lastname;
// 	user.userId = userid;
// 	user.age = age;
// 	user.gender = gender;
// 	user.gmail = gmail;

// 	return user;    // remember using return because you are not using new keyword
// }

// //---------------------function is also use as an object---------------------------------------

// // how to create a prototype----> functionname.prototype.keyname = function(){};
// createuser.prototype.bio1 = function(){
// 		return " hi my name is " + this.firstName + " " + this.lastName + ".";
// }

// createuser.prototype.is182 = function(){
// 		return this.age > 17 ;
// }

// const apoorva = createuser("apporva","sarm",11,19,"Female","apporva@gamil.com");

// console.log(apoorva.bio1());
// // you can add as many key value pair in function prototype.
// // prototype is a free space as object that we can use this only function provide prototype property




// //        new
// // we used to create object inside function but instead we will use new keyword

// function createuser(fisrtname,lastname,age){
// 	this.fisrtName = fisrtname;
// 	this.lastName = lastname;
// 	this.age = age;
// };
// createuser.prototype.bio = function(){
// 	return this.fisrtName+ " " + this.lastName + " and "+ this.age
// }
// const manav1 = new createuser("manav","gupta",19);
// // what new keyword do - 
// // 1. create empty object
// // 2. will return
// // 3. object.create(createuser.prototype) will do itself.
// console.log(manav1.bio());

const allUsers = function(id,firstname,lastname){
    this.id = id;
    this.firstName = firstname;
    this.lastName = lastname;
}
allUsers.prototype.bio = function(){
    return `This user Id no is ${this.id} and User name is ${this.firstName},${this.lastName} thank you for reaching out.`;
}
const manav2 = new allUsers(23,"Manav","Gupta");

for (const key in manav2) {
    if (Object.hasOwnProperty.call(manav2, key)) {
        const element = manav2[key];
        console.log(element);
    }
}


