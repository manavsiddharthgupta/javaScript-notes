// sets 
// 1. it is iterable like arrays
// 2. store data
// 3. sets also have its own 
// 4. no duplicate allowed
// 5. cant access by indexed
// 6. order is not guaranteed

const number = new Set([1,2,334,4,5656,7,1,1,1,12,2]);
console.log(number);// expected output: { 1, 2, 334, 4, 5656, 7, 12 };
// to insert
number.add(98);
console.log(number); // expected output : Set(8) { 1, 2, 334, 4, 5656, 7, 12, 98 }

// sets is used to store unique element only

// Map data structure 
const person = new Map();
person.set("name","Manav");
person.set("age","17");
console.log(person);
// expected output: Map(2) { 'name' => 'Manav', 'age' => '17' }


//  option chaining

const user = {
	name: {firstName: "manav", lastName:"gupta"},
	id: 12,
	gender: "male"
};
console.log(user?.name?.firsName);//expected output: undefined instead of showing some error;
