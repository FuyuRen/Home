// JavaScript Document
function changeBar(n) {
	var per = n;
	$('#progressbar1').LineProgressbar({
		percentage: per,
		ShowProgressCount: false,
		fillBackgroundColor: "#4B4B4B",
		backgroundColor: "#CECECE",
		radius: "10px"
	});
}
var uplevel_exp = new Array();
var uplevel_point = new Array();
var exp1 = document.getElementById("exp1");
var exp2 = document.getElementById("exp2");
var add1 = document.getElementById("add_1");
var add2 = document.getElementById("add_2");
var dmg1 = document.getElementById("dmg_1");
var dmg2 = document.getElementById("dmg_2");
var dmg3 = document.getElementById("dmg_3");
var dmg4 = document.getElementById("dmg_4");
var levelp = document.getElementById("level");
var dead_sum = document.getElementById("dead_sum");
var hours = 0;
var minutes = 0;
var seconds = 0;
var dead = 0;

var player_dmg = 10;

for (var i = 1; i <= 99; i++) {
	uplevel_exp[i] = 15 * i;
	uplevel_point[i] = 2 * i;
}
uplevel_exp[99] = 99999999;
var user_exp = 0;
var user_level = 1;
function uplevel() {
	while (user_exp >= uplevel_exp[user_level]) {
		user_exp -= uplevel_exp[user_level];
		user_level++;
		levelp.innerText = user_level;
		player_dmg *= 1.5
		player_dmg = parseInt(player_dmg);
		myPoint += uplevel_point[user_level];
		total_point = myPoint;
		addLine();
		playMusic_normal(se[4]);
		addP("你升级了!当前等级为&nbsp;" + user_level, "red");
	}
	exp1.innerText = user_exp;
	exp2.innerText = uplevel_exp[user_level];
	changeBar((user_exp / uplevel_exp[user_level]) * 100);
}
uplevel();

function enterPlayerArea() {
	addLine();
	addP("你进入了人物界面," + "当前的等级为&nbsp;" + user_level, "white");
	document.getElementById("select_sub").innerText = true_magic_names[user_select][levels[user_select]];
	add1.innerText = parseInt(dmg_add[levels[user_select]] * 100) + "%";
	add2.innerText = parseInt(buff_add[levels[user_select]] * 100) + "%";
	dmg1.innerText = player_dmg;
	dmg2.innerText = parseInt(player_dmg * dmg_add[levels[user_select]] - player_dmg);
	dmg3.innerText = player_dmg;
	dmg4.innerText = parseInt(player_dmg * buff_add[levels[user_select]]);
}

function animation() {
	if(Auto_flag){
		AutoBattle();
	}
	seconds++;
	if(seconds >= 60){
		seconds = 0;
		minutes++;
	}
	if(minutes >= 60){
		minutes = 0;
		hours++;
	}
	showTime.innerHTML =
		(hours < 10 ? "0" + hours : hours) + ":" +
		(minutes < 10 ? "0" + minutes : minutes) + ":" +
		(seconds < 10 ? "0" + seconds : seconds);
}

function AutoBattle(){
	var finalFlag = [0,0,0,0];
	if(hp <= 0){
		restart();
	}
}
