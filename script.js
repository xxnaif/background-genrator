var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");



css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function randomclr() {
	 color1.value = getRandomColor();
	 color2.value = getRandomColor();

	 body.style.background =
 	"linear-gradient(to right, "
 	+ color1.value
 	+ ", "
 	+ color2.value
 	+ ")";



}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click" , randomclr);
