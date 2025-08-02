console.log("-------------------------------");

// bt 1:
console.log("bt 1:");

const num1 = (x) => {

	const a = 3;
	const b = 4;
	return a * x + b;
}

console.log(num1(5));

console.log("-------------------------------");

// bt 2:
console.log("bt 2:");

const perimeter = (width, heigh) => (width + heigh) * 2;
console.log(perimeter(10, 15));

console.log("-------------------------------");

// bt 3:
console.log("bt 3:");

const num3 = (r) => Math.PI * r * r;
console.log(num3(5).toFixed(2)); // toFixed() lam tron bao nhieu chu so trong so thap phan

console.log("-------------------------------");

// bt 4:
console.log("bt 4:");

const num4 = (num) => Math.floor(num) === num; // Math.floor() : kiem tra so nguyen

console.log(num4(17));

console.log("-------------------------------");

// bt 5:
console.log("bt 5:");

const num5 = (...sum) => sum.reduce((value1,value2) => value1 + value2, 0);
// ...sum :gom thanh 1 mang
// sum.reduce(x,y,0) : cong cac value lai voi nhau, bien cong dau tien bat dau tu 0
console.log(num5(1,2,3,4,5)); 

console.log("-------------------------------");

// bt 6:
console.log("bt 6:");

const num6 = (start, end) => {
	let sum = 0;
	for (let i = start; i <= end; i++) {
		sum += i;
	}
	return sum;
}

console.log(num6(5,10));

console.log("-------------------------------");

// bt 7:
console.log("bt 7:");

const str = "madam";

const isPalindrome = (str2) => {
	const str3 = str2.split("").reverse().join();
	// split(): tach cac phan tu cach nhau boi dau ()
	//reverse(): dao nguoc arr
	// join() tra ve mot mang duoi dang chuoi
	return str3 === str;
}

console.log(isPalindrome("hello"));


console.log("-------------------------------");

// bt 8:
console.log("bt 8:");

const num8 = [2, 4, 6, 8, 10];

const number8 = (arr) => {
	const check = arr.every(num => num % 2 === 0) 
	// arr.every(): check tung phan tu, tra ve true neu tat ca cac phan tu deu true
	console.log(check);
}
number8(num8)

console.log("-------------------------------");

// bt 9:
console.log("bt 9:");

const num9 = [3, -1, 4, -2, 5];

const sum9 = (num) => {
	const finds = num.filter(find => find > 0);
	console.log(finds);
	const sum = finds.reduce((start, end) => start + end, 0)
	console.log(sum);
}

sum9(num9)


console.log("-------------------------------");

// bt 10:
console.log("bt 10:");


const number = [1, 3, 7, 0, -2];
const find10 = (num) => {
	return Math.max(...num) // tim so lon nhat trong ham bang Math.max(...num)
}
console.log(find10(number));

console.log("-------------------------------");

// bt 11:
console.log("bt 11:");

const num11 = [12, 33, 45, 7, 89];

const number11 = (number) => {
	return number.sort((a, b) => a - b) // arr.sort(): sap xep phan tu cua mang
}
console.log(number11(num11));

console.log("-------------------------------");

// bt 12:
console.log("bt 12:");

const num12 = [2,5,2,7,9,10];

const newArr = (number, k) => {
	const new12 = [...new Set(number)];

	if(k > new12.length) {
		return console.log("khong co");;
	}else {
		new12.sort((a, b) => b-a)
		console.log(new12[k - 1]);
	}
}

newArr(num12,10)

console.log("-------------------------------");

// bt 14:
console.log("bt 14:");

const world = "This is a test";
const newWorld = world.split(" ")

console.log(newWorld);

console.log("-------------------------------");

// bt 15:
console.log("bt 15:");

const data = { a: 1, b: 'hello', c: 3, d: 'world' };

const newData = (number) => {
	let sum = 0;
	for (let value of Object.values(number)) {
		// console.log(value);
		if(typeof value === "number") {
			sum += value;
		}
	}
	return	sum;
}

console.log(newData(data));