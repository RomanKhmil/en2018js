var Bimp = document.getElementById("Bimp");
var Bexp = document.getElementById("Bexp");
var resEx = document.getElementById("result");
var imp = document.getElementById("iport");

Bexp.addEventListener("click", function () {
	resEx.innerHTML = localStorage.getItem("words");
});


Bimp.addEventListener("click", function () {
	var text = imp.value;
	saveStor(text,"words");
});