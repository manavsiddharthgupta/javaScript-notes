// important array method
// 1. for each
// 2. map
// 3. filter
// 4. reduce


const users = [
	{userId:1,firstName:"manav",lastName:"gupta",gender:"male"},
	{userId:2,firstName:"rahul",lastName:"kumar",gender:"male"},
	{userId:3,firstName:"vikash",lastName:"upadhyay",gender:"female"},
	{userId:4,firstName:"ayanabha",lastName:"raj",gender:"male"},
	{userId:5,firstName:"raj",lastName:"ranjan",gender:"female"}
];
// 1. for each

users.forEach(function(user){
	// console.log(user.gender);
})

// example 2 : 
const arr = [1,2,3,4,5,6,7];

arr.forEach(function(num){
	// console.log(num*2);
});





// 2. map

const id = users.map(function({userId}){        // param destructure
	return userId*2;
});
// console.log(Array.isArray(id));
  // or 

const id1 = users.map((user)=>{
	return user.userId;
})
// console.log(id1);



// 3. filter 

const gender = users.filter(function({gender}){
	if(gender === "male"){
		// return users;
	}
});

// or

const gender1 = users.filter(function(user){
	if(user.gender === "male"){
		return user;
	}
});


// console.log(gender1);

// 4. reduce method
// it will just add
const ans = users.reduce((accumulation, currentprice)=>{
	return accumulation + currentprice.userId; 
},0);
// console.log(ans);








// -------------------------------------------------
//  sort
users.sort((a,b)=>{
	return b.userId - a.userId;
});
// console.log(users);

const fruits = ["orange","apple","grapes","banana"];
fruits.sort();
// console.log(fruits);
// find method

const sample = [7,9,5,3,2,34,56,7];
let finded= sample.find((num)=>{
	return num%2===0;
})
// console.log(finded);


// everymethod
let every = sample.every((num)=>{
	return num%2==0;
});
// console.log(every)
// the answer will be in boolean

// some method
// in this method only one element have to satisfy to give true
// example: to check if there is an element whivh is smaller 2 in sample array
let some = sample.some((num)=>{
	return num  < 3;
})
// console.log(some);

// fill method

const samplenew = new Array(10).fill(-1);
// console.log(samplenew);



// splice method

samplenew.splice(2,5,3,4,5,6,7);
// console.log(samplenew);
// expected output :: [  -1, -1,  3,  4,  5, 6,  7, -1, -1, -1]



