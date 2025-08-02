
// bt 1:
console.log("bt 1:");

let names = ["John", "Alice"];
names.push("Tom")
console.log(names);

console.log("-------------------------------");

// bt 2:
console.log("bt 2:");

const num2 = [1, 2, 3, 4]

let ss2 = num2.map((value) => value * value)
console.log(ss2);

console.log("-------------------------------");

// bt 3:
console.log("bt 3:");

const num3 = [5, 10, 15, 20, 25];

let ss3 = num3.filter((value) => {
	if(value % 2 === 0) {
		return value;
	};
})

console.log(ss3);

console.log("-------------------------------");

// bt 4:
console.log("bt 4:");

const num4 = [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }]

let ss4 = num4.find((value => {
	if(value.score >= 8) {
		return value;
	}
}))

console.log(ss4);

console.log("-------------------------------");

// bt 5:
console.log("bt 5:");

const num5 = [3, 5, 8, 12, 15]
let ss5 = num5.findIndex((value, index) => {
	if(value >= 10) {
		return index;
	}
})
console.log(ss5);

console.log("-------------------------------");

// bt 6:
console.log("bt 6:");

const num6 = ['a', 'b', 'c', 'd', 'e']

let push = num6.splice(3,1,"f")
console.log(num6);

console.log("-------------------------------");

// bt 7:
console.log("bt 7:");

const num7 = { name: 'Tom', age: 21, major: 'Computer Science' }
console.log(Object.keys(num7));

console.log("-------------------------------");

// bt 8:
console.log("bt 8:");

const num8 = { name: 'Tom', age: 21, major: 'Computer Science' }
console.log(Object.values(num8));

console.log("-------------------------------");

// bt 9:
console.log("bt 9:");

const a = { a: 1, b: 2 } 
const b = { c: 3, d: 4 }

console.log(Object.assign(a,b));

console.log("-------------------------------");

// bt 10:
console.log("bt 10:")

const num10 = [1, 2, 3];
let ss10 = [...num10,4]
console.log(ss10);

console.log("-------------------------------");

// bt 11:
console.log("bt 11:")

const num11 = { name: 'Alice', age: 25 } 
const ss11 = {...num11, job: 'Developer'}
console.log(ss11);

console.log("-------------------------------");

// bt 12:
console.log("bt 12:")

const num12 = ['john', 'alice', 'tom']
const ss12 = num12.map((value) => {
	return value.toUpperCase()
})
console.log(ss12);

console.log("-------------------------------");

// bt 13:
console.log("bt 13:")

const num13 = [1, 2, 3, 4, 5, 6]

const result = (value) => {
	let number = value.filter((num) => num % 2 == 0)
	let sum = number.reduce((a,b) => {
		return a + b;
	}, 0)
	return sum;
	
}
console.log(result(num13));

console.log("-------------------------------");

// bt 14:
console.log("bt 14:")

const num14 = [1, 2, 2, 3, 4, 4, 5]

const newArr = [...new Set(num14)]
console.log(newArr);

console.log("-------------------------------");

// bt 15:
console.log("bt 15:")

const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
function finds(arr) {
  const result = {};

  for (let item of arr) {
    result[item] = (result[item] || 0) + 1;
  }

  return result;
}

console.log(finds(arr));