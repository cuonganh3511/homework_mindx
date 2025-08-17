console.log("BT 1");

let titleH1 = document.querySelector(".titleH1");
console.log(titleH1);
titleH1.textContent = "Đây là nội dung";

console.log("BT 2");

// titleH1.style.color = "red";
// titleH1.style.background = "blue";

console.log("BT 3");

const btnClick = document.querySelector(".btnClick");
let change = false;

btnClick.addEventListener("click", () => {
	if (!change) {
		titleH1.style.color = "red";
		titleH1.style.background = "blue";
		change = true;
	} else {
		titleH1.style.color = "black";
		titleH1.style.background = "none";
		change = false;
	}

})

console.log("BT 4, 5"); 

let listTask = [];
const input = document.querySelector(".input");
const outPut = document.querySelector(".output");
const outPutTwo = document.querySelector(".output-2");
const btnChange = document.querySelector(".btn-change");


btnChange.addEventListener("click", () => {
	let valueInput = input.value;
	if(valueInput) {
		outPut.textContent = valueInput;
		listTask.push(valueInput)

		// lưu dữ liệu vào trong local, key = cart, value = listTalk
		localStorage.setItem("cart", JSON.stringify(listTask))

		// lấy dữ liệu từ cart ra và lưu vào trong listLocal
	// 	let listLocal = JSON.parse(localStorage.getItem("cart"))
	// 	input.value = "";

	// 	if(listTask.length !== 0) {
	// 		outPutTwo.innerHTML = listLocal.map(item => `<li>${item}</li>`).join("");
		
	// 	} else {
	// 		return;
	// 	}
	innerItem();
	
	} 


})

let innerItem = () => {
		let listLocal = JSON.parse(localStorage.getItem("cart"));

		if(listLocal !== 0) {
			outPutTwo.innerHTML = listLocal.map(item => `<li>${item}</li>`).join("");
		} else {
			return;
		}

}

innerItem()