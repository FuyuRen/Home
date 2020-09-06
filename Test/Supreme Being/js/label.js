var label = document.getElementsByClassName("checkbox");
label = label[0];
function label_click(){
	var mark = label.children[2];
	if(Auto_flag){
		Auto_flag = false;
		mark.style.color = "rgba(0,0,0,0.00)";
		label.children[0].style.color = "white";
		label.children[1].style.color = "white";
		
		label.children[0].style.textShadow = "0 0 2px white";
		label.children[1].style.textShadow = "0 0 2px white";
		
		mark.style.textShadow = "0 0 2px rgba(0,0,0,0.00)";
		label.style.backgroundColor = "#660066";
	}else{
		Auto_flag = true;
		mark.style.color = "black";
		mark.style.textShadow = "0 0 2px black";
		label.children[0].style.color = "black";
		label.children[1].style.color = "black";
		
		label.children[0].style.textShadow = "0 0 2px black";
		label.children[1].style.textShadow = "0 0 2px black";
		label.style.backgroundColor = "#F6A7FF";
	}
}
