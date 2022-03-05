// Class keyword
// in javaScript class keyword is fake
// use constructor keyword
class usercreate {
	constructor(firstName,lastName,age,gender,gmail){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.gamil = gmail;
	}
	bio(){
		return this.firstName + this.lastName;
	}
}
const manav = new usercreate("manav","gupta",19,"male","manavgupta@gmail")
console.log(manav.bio())


// lets create more class and learn extends keyword and super keyword
class Animal {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	eat(){
		return this.name+ " is eating";
	}
	is5(){
		return this.age > 4;
	}
}
const animal1 = new Animal("tommy",6);
console.log(animal1.eat());

class Dog extends Animal{
	constructor(name,age,speed){
		super(name,age);
		this.speed = speed;
	}
}
const dog1 = new Dog("dexter",3,4.55);
console.log(dog1);
console.log(dog1.eat());

//here dog is child class and animal is base class so javascript first check if the key or method present in child class then if not it will check in its base class i.e animal


// static method and properties
//  every method is realted to an object it means for calling these method we have to create an object  first

// but we can create the method and we dont have to create the object we will use static 

class Human {

	static wave(){
		console.log("hello")
	}
	constructor(firstname,lastname,age,gender){
		this.firstName = firstname;
		this.lastName = lastname;
		this.age = age;
		this.gender = gender;
	}
	is18(){
		return this.age > 17;
	}
}
Human.wave();  // we wont be creating object and using object to call the function instead we will use class name here beacuse this is static function 



// learn getter and setter


// lets create more class

class Spices {
	constructor(name,age,haircolor,gender,weight){
		this.name = name;
		this.age = age;
		this.color = haircolor;
		this.gender = gender;
		this.weight = weight;
	}
	bio(){
		return "Hi my name is " + this.name + " and my age is " + this.age + " and my weight is " + this.weight + ".";
	}
};
const manavgupta = new Spices("Manav Gupta",19,"black","male",66);
console.log(manavgupta);

class Cat extends Spices {
	constructor(name,age,haircolor,gender,weight,speed){
		super(name,age,haircolor,gender,weight);
		this.speed = speed;
	}
}
const tommyhero = new Cat("Tommy hero",6,"blonde","female",66,3.99)
console.log(tommyhero.bio());


