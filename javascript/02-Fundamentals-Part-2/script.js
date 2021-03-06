"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const if = 534;


function logger() {
	console.log("My name is yj");
}

// calling , running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}
// 반환된 값을 사용하려면 변수으 저장해야함
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//////////////////////////////////////////////
/////34강,function decleration and express////
/////////////////////////////////////////////

// function declaration
function calcAge1(birthYear) {
	return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

// 함수는 value이다. value를 variable에 저장할 수 있는 것 처럼. 값을 변수에 저장 가능하다.



///////////////////////
////arrow function/////
///////////////////////

// function declaration
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};
// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	//return retirement;
	return `${firstName} retires in ${retirement} years`;
};
// 화살표함수는 this 키워드를 포함하지않는다.
console.log(yearsUntilRetirement(1991, "YJ"));
console.log(yearsUntilRetirement(1980, "JM"));


/////////////////////////////////////
///Function calling other function///
/////////////////////////////////////

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	// call function inside another function
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
	return juice;
}
console.log(fruitProcessor(2, 3));
// DRU principle (don't repeat your self)



//////////////////////////////////////
////////////review function///////////
//////////////////////////////////////

const calcAge = function (birthYear) {
	return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
		// -1 = no meaning
		console.log(`${firstName} has already retired`);
		return -1;
	}
	//return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "YJ"));
console.log(yearsUntilRetirement(1970, "KJ"));



///////////////////////////
/////array/////////////////
///////////////////////////
const friends = ["Micheal", "steven", "peter"];
console.log(friends);

const years = new Array(1991, 1994, 2008, 2020);
console.log(friends[0]);



const friends = ["Micheal", "steven", "peter"];
// push function은 새로운 array를 return한다.
// ADD elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
const popped = friends.pop(); // Last element
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("peter")) {
	console.log("You have friend called peter");
}



//////////////////
const jonasArray = [
	"Jonas",
	"Schemedtmann",
	2037 - 1991,
	"teacher",
	["Micheal", "Peter", "Steven"],
];

//각각의 키는 value를 갖고있다.
//각각의 키는 property라고 불린다.
//jonas오브젝트는 다섯개의 property를 갖고있다.
// object literal syntax
// 어레이와 오브젝트의 차이점은 oredered와 unstructure데이터라는 것
const jonas = {
	firstName: "Jonas",
	lastName: "Schedtman",
	age: 2037 - 1991,
	job: "teacher",
	friends: ["Micheal", "Peter", "Steven"],
};

console.log(jonas);
// braket notation
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//console.log(jonas.'last' + nameKey) // unexpected string
//dot notation 과 bracket notation 쓰임의 차이는
// 위처럼 연산이 필요한 과정에서는 bracket notation으로 사용하고 이외에는 dot으로
// dot이 더 깔끔하고 쓰기 쉬우니까
/*const interestedIn = prompt(
	"what do you want know about me? choose between fistName, lasName, and friends"
);
//bracket notation을 사용할 때 작동함
console.log(jonas[interestedIn]);
//dot notation을 사용할 때 작동 안함
//console.log(jonas.interestedIn);

if (jonas[interestedIn]) {
	console.log(jonas[interestedIn]);
} else {
	console.log("wrong request!");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonassschemtman";
console.log(jonas);

//challenge
console.log(
	`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);


///////////////////////
//////object method////
///////////////////////

const jonas = {
	firstName: "Jonas",
	lastName: "Schedtman",
	birthYear: 1991,
	age: 2037 - 1991,
	job: "teacher",
	friends: ["Micheal", "Peter", "Steven"],
	hasDriverLicense: true,
	//function expression, function value
	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear;
	// },
	// this = equal to the object calling the method, basically equal to the object
	// calcAge: function () {
	// 	console.log(this);
	// 	return 2037 - this.birthYear;
	// },
	//jonas object가 calcAge를 호출하는 유일한 메서드이기 때문에 this = jonas

	// 새롭게 계산할 필요가 없음
	calcAge: function (birthYear) {
		this.age = 2037 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-year old ${
			jonas.job
		}, and he has ${this.hasDriverLicense ? "a" : "no"} driver license`;
	},
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

//function declaration
// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };

// callenge
console.log(jonas.getSummary());


const jonas = [
	"Jonas",
	"Schmedtmann",
	2037 - 1991,
	"teacher",
	["Micheal", "Peter", "Steven"],
	true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
	console.log(jonas[i], typeof jonas[i]);

	//types[i] = typeof jonas[i];
	types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);
}

console.log(ages);

console.log("ONLY STRING");
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] !== "string") continue;
	console.log(jonas[i], typeof jonas[i]);
}

console.log("BREAK WITH NUMBER");
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] !== "number") break;
	console.log(jonas[i], typeof jonas[i]);
}

*/

const jonas = [
	"Jonas",
	"Schmedtmann",
	2037 - 1991,
	"teacher",
	["Micheal", "Peter", "Steven"],
	true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
	console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`--------------Starting exercise${exercise}`);
	for (let rep = 1; rep < 6; rep++) {
		console.log(`Lifting weight repeating${rep}`);
	}
}
