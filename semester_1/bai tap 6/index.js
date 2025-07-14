// Bai tap 1

const area = function(length, width) {
	return length * width;
}

console.log(area(5,5));

const perimeter = (length, width) => {
	return (length + width) * 2;
}

console.log(perimeter(5,5));

// bai tap 2

const secont = 604564;

const hour = (secont - secont % 3600) / 3600;
const minit = ((secont % 3600)-(secont % 3600) % 60)/60;
const seconts = secont - minit * 60 - hour * 3600;

console.log(`${hour}h ${minit}m ${seconts}s`);

// bai tap 3

const luyThua = 2;
const coSo = 5;

console.log(Math.pow(coSo, luyThua));

// bai tap 4

const trungBinh = (number1, number2, number3) => {
	return (number1 + number2 + number3) / 3;
}
console.log(trungBinh(3,4,5));

// bai tap 5

const khoangCach = (a, b) => {
	return Math.sqrt(Math.pow(a * 2 - a * 1, 2) + Math.pow(b * 2 - b * 1, 2));
}
console.log(khoangCach(2,3));

// bai tap 6

const biger = (a, b, c) => {
	if(a > b && a > c) {
		return true;
	} 
	return false;
}

console.log(biger(4,2,3));

// bai tap 7

const soSanh = (value1, value2) => {
	if(value1 === value2) {
		return true;
	}
	return false;
}

console.log(soSanh(5, "5"));

// bai tap 8

const soDuong = (value) => {
	if(value > 0) {
		return `${value} true`;
	}
	return false;
}

console.log(soDuong(5));

// bai tap 9

const namNhuan = (value) => {
	if(value % 400 === 0 || (value % 4 === 0 && value % 100 !== 0)) {
		return `${value} true`;
	}
	return false;
}

console.log(namNhuan(2024));

// bai tap 10

const time = (h1, m1, h2, m2) => {
	// if(h1 > h2 && m1 >= m2 || h1 > h2 && m1 <= m2 || ) {

	// 	return `${h1}h ${m1}m true`;
	// }
	// return false;

	const result = h1 > h2 ? true : h1 === h2 ? m1 > m2 ? true : false : false;
	return result;
}

console.log(time(8,30,8,20));


