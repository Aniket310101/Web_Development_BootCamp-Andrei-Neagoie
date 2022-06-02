var btn = document.querySelector("#enter");
var textArea = document.querySelector("#userinput");
var ul = document.querySelector("#list");

function addItems(){
	// console.log(textArea.value);
	
	var item = document.createElement("li");
	item.appendChild(document.createTextNode(textArea.value));
	ul.appendChild(item);
	textArea.value = "";
	
}

function onBtnClick(){
	if(textArea.value.length > 0){
		addItems();
	}
}

function onKeypress(event){
	if((textArea.value.length > 0) && event.keyCode === 13){
		addItems();
	}
	// console.log(event);
}


btn.addEventListener("click", onBtnClick);
textArea.addEventListener("keypress", onKeypress);