// bai tap 1
console.log("bai 1:");

let res_1 = 0;

for (let i = 0; i <= 100; i++) {
	res_1 += i;
}
console.log("tong tu 1 den 100 la: ", res_1);

console.log("-------------------------------------------------");

// bai tap 2
console.log("bai 2");
const res_2 = [];

for (let i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		res_2.push(i)
	}
}
console.log("cac so chia het cho 3 & 5 la: ", res_2.join(", "));

console.log("-------------------------------------------------");

// bai tap 3
console.log("bai 3");

let res_3 = 1;
const input_3 = 5;

if (Number.isInteger(input_3)) {
	for (let i = 1; i <= input_3; i++) {
		res_3 *= i;
	}
	console.log(`giai thua cua ${input_3} la: `, res_3);
} else {
	console.log("số nguyên cần in ra không hợp lệ");
}

console.log("-------------------------------------------------");

// bai tap 4
console.log("bai 4");


for (let i = 2; i <= 9; i++) {
	console.log(`bang cuu chuong ${i} : `);
	for(let j = 1; j <= 10; j++) {
		console.log(`${i} * ${j} = `, i * j);
	}
}

console.log("-------------------------------------------------");

// bai tap 5
console.log("bai 5");

let n = 35;
let binary = "";

while (n > 0) {
	binary = n % 2 + binary;
	// them n % 2 vao chuoi, vi tri dang truoc so co trong chuoi
	n = Math.floor(n / 2);
}
console.log(binary);

// 35 > 0 => 35 % 2 = 1 + "" => 1 / 35/2 = 17
// 17 > 0 => 17 % 2 = 1 + "1" => 11 / 17/2 = 8...
// 

console.log("-------------------------------------------------");
