console.log("localStorage connected");
console.log(localStorage.getItem("words"));
function saveStor(t,STname) {
	localStorage.removeItem(STname);
	localStorage.setItem(STname,t);
}
function createStor(name) {
	if(localStorage.getItem(name)){
		return console.log("that storage name is already used");
	}
	localStorage.setItem(name,"");
}
function delall() {
	//clear everything
	localStorage.clear();
}