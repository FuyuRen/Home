// JavaScript Document
var magic_names_1 = ["金", "木", "水", "火", "土", "无"];
var magic_names_2 = ["元素初级法典", "元素入门法典", "元素高级法典", "元素专精法典", "元素大师法典"];
var magic_names_special = ["圣白星陨", "木之裁决", "苍蓝烙印", "终焉之火", "狂沙咆哮", "元素爆发"];
var true_magic_names = new Array();
for (var i = 0; i < magic_names_1.length; i++) {
	true_magic_names[i] = new Array();
	for (var j = 0; j <= magic_names_2.length; j++) {
		if (j == magic_names_2.length) {
			true_magic_names[i][j] = magic_names_special[i];
		} else {
			true_magic_names[i][j] = magic_names_1[i] + magic_names_2[j];
		}
	}
}
var myPoint = 0;
var levels = [0, 0, 0, 0, 0, 0];
var upPoint = [10, 30, 50, 100, 500, 0];
var dmg_add = [1.1, 1.3, 1.5, 1.7, 1.9, 2.5];
var buff_add = [0.3, 0.5, 0.7, 1, 1.5, 3];
var magic_point = document.getElementsByClassName("point");
var magic_name = document.getElementsByClassName("magic_name");
var upgrade = document.getElementsByClassName("upgrade");
var select = document.getElementById("select");
var user_select = 5;
var total_point = 0;

function magic() {
	document.getElementById("points").innerText = myPoint;
	document.getElementById("select_sub").innerText = true_magic_names[user_select][levels[user_select]];
	select.innerText = true_magic_names[user_select][levels[user_select]];
	for (var i = 0; i < magic_point.length; i++) {
		var level = levels[i];
		if (myPoint < upPoint[level] || levels[i] == (magic_point.length - 1)) {
			upgrade[i].style.cursor = "not-allowed";
		} else {
			upgrade[i].style.cursor = "pointer";
		}
		magic_name[i].innerHTML = true_magic_names[i][level];
		magic_point[i].innerHTML = upPoint[level];
	}
	addLine();
	addP("你进入了魔法界面," + "您当前的点数为&nbsp;" + myPoint, "white");
	for (var i = 0; i < magic_point.length; i++) {
		var level = levels[i];
		addP(
			true_magic_names[i][level] +
			"&nbsp;的,伤害加成为&nbsp;" +
			(parseInt(dmg_add[level] * 100)) +
			"%" +
			",属性加成为&nbsp;" +
			(parseInt(buff_add[level] * 100)) +
			"%", "white"
		);
	}
}

function useMagic(index) {
	user_select = index;
	document.getElementById("select_sub").innerText = true_magic_names[user_select][levels[user_select]];
	select.innerText = true_magic_names[user_select][levels[user_select]];
	addP("你正在使用&nbsp;" + true_magic_names[user_select][levels[user_select]], "yellow");
	playMusic_normal(se[3]);
	changeMagic();
}

function upgradeMagic(index) {
	if (myPoint >= upPoint[levels[index]] && levels[index] != (magic_point.length - 1)) {
		myPoint -= upPoint[levels[index]];
		levels[index]++;
		document.getElementById("points").innerText = myPoint;
		magic_point[index].innerText = upPoint[levels[index]];
		magic_name[index].innerText = true_magic_names[index][levels[index]];
		addP("你将&nbsp;" +
			true_magic_names[index][levels[index] - 1] +
			"&nbsp;升级为&nbsp;" +
			true_magic_names[index][levels[index]] +
			"&nbsp;,伤害加成为&nbsp;" +
			(parseInt(dmg_add[levels[index]] * 100)) +
			"%" +
			",属性加成为&nbsp;" +
			(parseInt(buff_add[levels[index]] * 100)) +
			"%", "red");
		playMusic_normal(se[4]);
		useMagic(index);
	} else if (levels[index] == (magic_point.length - 1)) {
		playMusic_normal(se[2]);
		addP("已经是最高级!", "blue");
	} else {
		playMusic_normal(se[2]);
		addP("你的点数不够!", "blue");
	}
}

function restartPoint() {
	levels = [0, 0, 0, 0, 0, 0];
	myPoint = total_point;
	document.getElementById("points").innerText = myPoint;
	document.getElementById("select_sub").innerText = true_magic_names[user_select][levels[user_select]];
	select.innerText = true_magic_names[user_select][levels[user_select]];
	for (var i = 0; i < magic_point.length; i++) {
		var level = levels[i];
		if (myPoint < upPoint[level] || levels[i] == (magic_point.length - 1)) {
			upgrade[i].style.cursor = "not-allowed";
		} else {
			upgrade[i].style.cursor = "pointer";
		}
		magic_name[i].innerHTML = true_magic_names[i][level];
		magic_point[i].innerHTML = upPoint[level];
	}
	addLine();
	addP("你重置了点数," + "您当前的点数为&nbsp;" + myPoint, "white");
}
