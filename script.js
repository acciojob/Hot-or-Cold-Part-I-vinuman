//your code here
let btn = document.getElementById("btn");
let numTag = document.getElementById("num");
let input = document.getElementById("guess");
let response = document.getElementById("respond")
let diff = Number(input) - Number(numTag.value);

if(Math.abs(diff<=5)){
	response.textContent = "Hot";
} else{
	response.textContent = "Cold";
}

function generateRandom() {
	let no =  Math.floor(Math.random()*40)-20;
	numTag.textContent =no;
}

btn.addEventListener('click', generateRandom);
