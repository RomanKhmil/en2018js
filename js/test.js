console.log("test is connected")
var list_txt = localStorage.getItem("words"),
	list_array = transform(list_txt,0),
	list_container = document.getElementById("result");
var test_array = [];
var test_width = 0,
	test_array_true = [],
	test_array_false = [],
	ans_t = 0,
	ans_f = 0;

var ansB = document.getElementById("ansB");
function resShow() {
	console.log(test_array_false);
	console.log(test_array_true);
	var container = document.getElementById("result");
	var truec = document.createElement("div");
	var falec = document.createElement("div");
	container.appendChild(falec);
	container.appendChild(truec);

	for (var i = test_array_false.length - 1; i >= 0; i--) {
		var falseItem = document.createElement("div");
		var falseWord = document.createElement("p");
		var falseTran = document.createElement("p");
		var trueItem = document.createElement("div");
		var trueWord= document.createElement("p");
		var trueTran = document.createElement("p");
		falseWord.innerHTML = test_array_false[i][0];
		falseTran.innerHTML = test_array_false[i][1];
		trueWord.innerHTML = test_array_false[i][0];
		for (var m = list_array.length - 1; m >= 0; m--) {
			if(list_array[m][0] == test_array_false[i][0]){
				trueTran.innerHTML = list_array[m][1];
			}
		}
		if(falseTran.innerHTML == ""){
			falseTran.innerHTML = ">>empty";
		}
		container.className = 'row';
		falseTran.className = "black";
		trueTran.className = "black";
		falec.className = "true";
		truec.className = "false";
		falseItem.appendChild(falseWord);
		falseItem.appendChild(falseTran);
		trueItem.appendChild(trueWord);
		trueItem.appendChild(trueTran);
		falec.appendChild(falseItem);
		truec.appendChild(trueItem);
		
	}

}


function ask(num) {
	var que = document.getElementById("question");
	if(num == null){
		que.innerHTML = "end";
		resShow();
		return console.log("end");
	}
	
	que.innerHTML = list_array[num][0];
}
function ans() {
	var i = 0;
	var assk = document.getElementById("question").innerHTML;
	var ans = document.getElementById("ans").value;
	while(assk != list_array[i][0]){
		i++
	}
	if(ans == list_array[i][1]){
		console.log("good ans");
		ans_t++;
		test_array_true.push([list_array[i][0],list_array[i][1]]);
		ask(test_array[0]);
		console.log(test_array[0]);
		test_array.splice(0, 1);
	}
	else{
		console.log("bad ans");
		ans_f++;
		test_array_false.push([list_array[i][0],ans]);
		list_array[i][2]++;
		ask(test_array[0]);
		console.log(test_array[0]);
		test_array.splice(0, 1);
		saveStor(transform("",list_array),"words");
	}
}


function start() {
	var i = 0;
	test_width = list_array.length;
	for (; i <= list_array.length - 1; i++) {
		console.log(i);
		test_array.push(i);
	}
	ask(test_array[0]);
	test_array.splice(0, 1);
}
ansB.addEventListener("click", function () {
	ans();
});
start();