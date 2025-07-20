// BT 1
console.log("BT 1: ");

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(`ten cua nguoi dau tien la: `,names[0]);
const lastName = names.length -1
console.log(`ten cua nguoi cuoi cung la: `,names[lastName]);

console.log("-----------------------------");

// BT 2
console.log("BT 2: ");

const name2 = ["John", "Jane", "Jim", "Jake"];

name2[1] = "Mary";
console.log(name2);

console.log("-----------------------------");

// BT 3
console.log("BT 3: ");

const name3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

name3.forEach((value,index) => console.log(index + ':' + value))

console.log("-----------------------------");

// BT 4
console.log("BT 4: ");

const name4 = ["Alice", "Bob", "Charlie", "David"];

name4.push("Mindx");
console.log(name4);

console.log("-----------------------------");

// BT 5
console.log("BT 5: ");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 0; i < numbers.length; i++) {
// 	if(numbers[i] % 2 !== 0) {
// 		console.log(numbers[i]);
// 	}
// }

numbers.forEach((value) => {
	if(value % 2 !== 0) {
		console.log(value);
	}
})

console.log("-----------------------------");
