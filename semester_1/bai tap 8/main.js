// BT 1
console.log("BT 1: ");

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(`ten cua nguoi dau tien la: `, names[0]);
const lastName = names.length - 1 // names.length de dem mang co bao nhieu phan tu 
console.log(`ten cua nguoi cuoi cung la: `, names[lastName]);

console.log("-----------------------------");

// BT 2
console.log("BT 2: ");

const name2 = ["John", "Jane", "Jim", "Jake"];

name2[1] = "Mary"; // thay the name2 o vi tri [1] thanh Mary
console.log(name2);

console.log("-----------------------------");

// BT 3
console.log("BT 3: ");

const name3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

name3.forEach((value, index) => console.log(index + ':' + value))

console.log("-----------------------------");

// BT 4
console.log("BT 4: ");

const name4 = ["Alice", "Bob", "Charlie", "David"];

name4.push("Mindx"); // them phan tu vao cuoi mang
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

numbers.forEach((value) => {  // lap qua tung phan tu cua mang
	if (value % 2 !== 0) {
		console.log(`so le trong mang la: `,value);
	}
})

console.log("-----------------------------");

// BT 6
console.log("BT 6: ");

const name6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

// const dav = name6.indexOf("David");
console.log(name6[name6.indexOf("David")]); // indexOf(phan tu can tim) de tim kiem vi tri cua phan tu

console.log("-----------------------------");


// BT 7
console.log("BT 7: ");

const number7 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];

// const num7 = 0;
// for (let i = 0; i < number7.length; i++) {
// 	if (number7[i] === 2) {
// 		num7++;
// 		console.log(num7);
// 	}
// }

const count = number7.filter(num => num === 2); // filter(x) de loc va tao ra mot mang moi
console.log(`so lan 2 duoc lap lai la: `,count.length); // dem so phan tu trong mang moi ma filter da loc ra

console.log("-----------------------------");

// BT 8
console.log("BT 8: ");

const number8 = [5, 2, 9, 3, 7, 11, 8];
let num8 = number8.sort((a,b) => a-b); // soft(a,b) sap xep mang theo thu tu
console.log(`so lon nhat la: `,num8[num8.length-1]);

console.log("-----------------------------");

// BT 9
console.log("BT 9: ");

const array9 = [1, 2, 3, 4, 5];
let newArray9 = array9.reverse(); // reverse() dao nguoc mang
console.log(newArray9);

console.log("-----------------------------");

// BT 10
console.log("BT 10: ");

const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];

// const array10 = duplicatesArray.filter((value,index) => {
// 	return index === duplicatesArray.indexOf(value);
	
// });
// console.log(array10);

const array10 = [...new Set(duplicatesArray)];
console.log(array10);

// Set: chi luu gia tri duy nhat
// [...new Set()] : chuyen new Set() tro thanh mang.

console.log("-----------------------------");

// BT 11
console.log("BT 11: ");

const number11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num11 = number11.reduce((pre,cur) => pre + cur,0 ) // reduce(bien khoi tao, bien hien tai)
//                              0  + 1               0: so khoi tao ban dau
console.log(num11);