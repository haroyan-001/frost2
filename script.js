let menuLogo = document.querySelector("#menuLogo");
let menuClose = document.querySelector(".menuClose");
let menuOpen = document.querySelector(".menuOpen");

menuLogo.onclick = () => {
	
	menuOpen.style.display = "block";
}

menuClose.onclick = () => {

	menuOpen.style.display = "none";
}


let name = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
let errorElement = document.querySelector(".error");
let menu1 = document.querySelector(".menu1");
let menuOpen1 = document.getElementById("button1");
let menuClose1 = document.querySelector(".button12");

menuOpen1.onclick = (e) => {
	e.preventDefault();
	let b = email.value;
	let a = message.value
	console.log(b.includes("@"))

	let errorMessage = []
	if (name.value == "") {
		errorMessage.push("Name is required")
	}
	if (b == "" || b.includes("@") == false) {
		errorMessage.push("emil is required")
	}
	if (subject.value == "") {
		errorMessage.push("subject is required")
	}
	if (message.value == "") {
		errorMessage.push("message is required")
	}

	if (a < 10) {
		errorElement.innerHTML = errorMessage.join(", ")
	}

	if (errorMessage.length <= 0) {
		menu1.style.display = "block";
	}

	else{
		menu2.style.display = "block";
	}
}

menuClose1.onclick = () => {
	
	menu1.style.display = "none";
}



// menuClose1.onclick = () => {
	
// 	menu2.style.display = "none";
// }