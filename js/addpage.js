console.log("addpage connected")
//				to array "transform(text,0)"
//transform => 
//				to text "transform("",to);"
//
if(!localStorage.getItem("words")){
	//
	localStorage.setItem("words","");
}
var list_txt = localStorage.getItem("words"),
	list_array = transform(list_txt,0),
	list_container = document.getElementById("list");
if(list_array == ""){
	list_array = [];
}
var b_send = document.getElementById("send"),
	i_word = document.getElementById("word"),
	i_tran = document.getElementById("translate");

function li_dell(word) {
	var wordcont = document.getElementById("cont" + word);
	for (var i = list_array.length - 1; i >= 0; i--) {
		if(list_array[i][0] == word){
			list_array.splice(i,1);
			var newsave = transform("",list_array);
			wordcont.parentNode.removeChild(wordcont);
			saveStor(newsave,"words");
		}
	}

}


function visualAddEl(arr) {
	//makes container with word
	var word = document.createElement("p");
	var tran = document.createElement("p");
	var death = document.createElement("p");
	var removebutton = document.createElement("button");
	var li_container = document.createElement("div");
	li_container.style.width = "300px";
	li_container.className = "list_item";

	word.innerHTML = arr[0];
	tran.innerHTML = arr[1];
	death.innerHTML = "mistakes: " + arr[2];
	removebutton.innerHTML = "remove";

	li_container.id = "cont" + arr[0];
	removebutton.id = arr[0];

	removebutton.addEventListener("click", function () {
		var word = arr[0];
		li_dell(word);
	});

	list_container.appendChild(li_container);
	li_container.appendChild(word);
	li_container.appendChild(tran);
	li_container.appendChild(death);
	li_container.appendChild(removebutton);

	console.log(arr);
}

function addElement(w,t) {
	//adds word
	//add scan for posibility
	if(t == ""){
		return console.log("translate is clear!!")
	}
	if(w == ""){
		return console.log("word is clear");
	}
	for (var i = list_array.length - 1; i >= 0; i--) {
		if(list_array[i][0] == w){
			return console.log("That word is already used");
		}
	}
	var wordarr = [];
	wordarr.push(w);
	wordarr.push(t);
	wordarr.push(0);
	list_array.push(wordarr);
	visualAddEl(wordarr);
	saveStor(transform("",list_array),"words");
}

function showList() {
	for (var i = 0; i < list_array.length; i++) {
		visualAddEl(list_array[i]);
	}
}

//b_send
i_word.addEventListener("keydown",function (e) {
	if (e.keyCode === 13) { 
       i_tran.focus();
    }
	
});

i_tran.addEventListener("keydown",function(e) {
	if (e.keyCode === 13) { 
       addElement(i_word.value,i_tran.value);
    }
    if (e.keyCode === 17){
    	i_tran.value = "";
    	i_word.value = "";
    	i_word.focus();
    	
    }
});

b_send.addEventListener("click", function () {
	addElement(i_word.value,i_tran.value);
});
showList();
console.log(list_array);