
// bt 1:
console.log("bt 1:");

let student = { name: "John", age: 20 };
student.major = "Computer Science";
console.log(student);

console.log("-------------------------------");

// bt 2:
console.log("bt 2:");

const person = { name: "Alice", age: 25, job: "Designer" };

delete person.job;
console.log(person);


console.log("-------------------------------");

// bt 3:
console.log("bt 3:");

const car = { brand: "Toyota", model: "Camry", year: 2020 };

const lengCar = Object.keys(car); // Object.key()  --- Object.values() : tạo mảng mới chứa key và value của objobj
console.log(lengCar.length); 

console.log("-------------------------------");


// bt 4:
console.log("bt 4:");

const product = { name: "Laptop", price: 1000 }

console.log(Object.entries(product)); // Object.entries() : tách các key value thành các mảng riêng

console.log("-------------------------------");


// bt 5:
console.log("bt 5:");

const products = [ { name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]

console.log(products.find(product => product.name = "camera"));  // find(): tim 1 sp dau tien n tim duoc va in ra mang moi

console.log("-------------------------------");

// bt 6:
console.log("bt 6:");

const  product_6 = [ { name: "Phone", price: 50 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]

console.log(product_6.filter(value => value.price > 100)); // tim nhieu sp thoa dieu kien va in ra mang moi

console.log("-------------------------------");


// bt 7:
console.log("bt 7:");

const person7 = { name: "Bob", age: 25, job: "Developer" }
const child7 = person7.age = 30;

console.log(person7);

console.log("-------------------------------");

// bt 8:
console.log("bt 8:");


const obj1 = { a: 1, b: 2 } 
const obj2 = { c: 3, d: 4 }

const objN = {...obj1, ...obj2} // gop hai obj lai voi nhau

console.log(objN);

console.log("-------------------------------");

// bt 9:
console.log("bt 9:");

let animals = { type: "Dog", name: "Buddy", age: 3 }

for(let key in animals) {
	console.log(`${key} : ${animals[key]}`); // for(let...in...) => key: index + obj.[key]: value
}

console.log("-------------------------------");

// bt 10:
console.log("bt 10:");

const car10 = { brand: "BMW", model: "X5" };

console.log("color" in car10); // kiem tra xem color co trong obj hay khong
