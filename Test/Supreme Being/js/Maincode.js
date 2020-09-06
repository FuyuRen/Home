// JavaScript Document
var S_flag = [0, 0, 0, 0];
var dmg_flag = [0, 0, 0, 0];
var exp_flag = [0, 0, 0, 0];
var receives = [0, 0, 0, 0];
var name_flag = ["", "", "", ""];
var RE_flag = 1;
var step = 30;
var now_step = 0;
var restart_button = document.getElementById("restart_button");

function showText(index) {
	RE_flag = index;
	restart_button.style.display = "none";
	for (var i = 0; i < 4; i++) {
		var receive = randAttr(index);
		receives[i] = receive;
		if (receive[0] == 0) {
			S_flag[i] = goodEffect[index][receive[1]][1];
			dmg_flag[i] = goodEffect[index][receive[1]][1];
			exp_flag[i] = 0;
			changeText(i, 0, goodEffect[index][receive[1]][1], goodEffect[index][receive[1]][0]);
		} else if (receive[0] == 1) {
			S_flag[i] = badEffect[index][receive[1]][1];
			dmg_flag[i] = -(badEffect[index][receive[1]][1]);
			exp_flag[i] = 0;
			changeText(i, 1, badEffect[index][receive[1]][1], badEffect[index][receive[1]][0]);
		} else if (receive[0] == 2) {
			var b = battle(enemys[index][receive[1]]);
			S_flag[i] = b[0];
			dmg_flag[i] = -(b[0]);
			exp_flag[i] = enemys[RE_flag][receive[1]][4];
			changeText(i, 2, b[0], enemys[index][receive[1]][0], enemys[RE_flag][receive[1]][4]);
		} else if (receive[0] == 3) {
			var b = battle(bosses[receive[1]]);
			S_flag[i] = b[0];
			dmg_flag[i] = -(b[0]);
			exp_flag[i] = bosses[receive[1]][4];
			changeText(i, 2, b[0], bosses[receive[1]][0], bosses[receive[1]][4]);
		}
	}
}

function changeMagic() {
	for (var i = 0; i < 4; i++) {
		var receive = receives[i];
		if (receive[0] == 0) {
			S_flag[i] = goodEffect[RE_flag][receive[1]][1];
			dmg_flag[i] = goodEffect[RE_flag][receive[1]][1];
			exp_flag[i] = 0;
			changeText(i, 0, goodEffect[RE_flag][receive[1]][1], goodEffect[RE_flag][receive[1]][0]);
		} else if (receive[0] == 1) {
			S_flag[i] = badEffect[RE_flag][receive[1]][1];
			dmg_flag[i] = -(badEffect[RE_flag][receive[1]][1]);
			exp_flag[i] = 0;
			changeText(i, 1, badEffect[RE_flag][receive[1]][1], badEffect[RE_flag][receive[1]][0]);
		} else if (receive[0] == 2) {
			var b = battle(enemys[RE_flag][receive[1]]);
			S_flag[i] = b[0];
			dmg_flag[i] = -(b[0]);
			exp_flag[i] = enemys[RE_flag][receive[1]][4];
			changeText(i, 2, b[0], enemys[RE_flag][receive[1]][0], enemys[RE_flag][receive[1]][4]);
		} else if (receive[0] == 3) {
			var b = battle(bosses[receive[1]]);
			S_flag[i] = b[0];
			dmg_flag[i] = -(b[0]);
			exp_flag[i] = bosses[receive[1]][4];
			changeText(i, 2, b[0], bosses[receive[1]][0], bosses[receive[1]][4]);
		}
	}
}

function randAttr(index) {
	if (now_step >= step) {
		return [3, index];
	} else {
		var randInt_1 = parseInt(Math.random() * 3);
		var randReset = parseInt(Math.random() * 20);
		if (randInt_1 == 0) {
			if (randReset == 0) {
				var randInt_2 = parseInt(Math.random() * goodEffect[index].length);
				var a = [randInt_1, randInt_2];
				return a;
			} else {
				return randAttr(index);
			}
		} else if (randInt_1 == 1) {
			if (randReset == 0) {
				var randInt_2 = parseInt(Math.random() * badEffect[index].length);
				var a = [randInt_1, randInt_2];
				return a;
			} else {
				return randAttr(index);
			}
		} else if (randInt_1 == 2) {
			var randInt_2 = parseInt(Math.random() * enemys[index].length);
			var a = [randInt_1, randInt_2];
			return a;
		}
	}

}

function changeText(index, attr, num, name, exp = "") {
	var divs = document.getElementsByClassName("block");
	var attrP = document.getElementsByClassName("effectName");
	var nameP = document.getElementsByClassName("name");
	var hpP = document.getElementsByClassName("effectHp");
	var expP = document.getElementsByClassName("add_exp");

	if (attr == 0) {
		attrP[index].style.color = "lightgreen";
		attrP[index].style.textShadow = "0 0 2px " + "green";
		attrP[index].innerText = "恢复";

		nameP[index].style.color = "lightgreen";
		nameP[index].style.textShadow = "0 0 2px " + "green";
		nameP[index].innerText = name;
		expP[index].innerText = exp;
	} else {
		attrP[index].style.color = "pink";
		attrP[index].style.textShadow = "0 0 2px " + "red";
		attrP[index].innerText = "失去";

		nameP[index].style.color = "pink";
		nameP[index].style.textShadow = "0 0 2px " + "red";
		nameP[index].innerText = name;
		if (attr == 2) {
			expP[index].innerText = "你将获得 " + exp + " 经验";
		} else {
			expP[index].innerText = exp;
		}
	}
	name_flag[index] = name;
	hpP[index].innerText = S_flag[index];

}

function battle(enemy) {
	var enemy_dmg = enemy[1];
	var enemy_def = enemy[2];
	var enemy_hp = enemy[3];
	var enemy_xp = enemy[4];
	var enemy_attr = enemy[5];
	var Failhp = 0;
	var dmg = player_dmg;
	if (user_select == enemy_attr) {
		dmg += parseInt(player_dmg * buff_add[levels[user_select]]);
	} else {
		dmg += parseInt(player_dmg * dmg_add[levels[user_select]] - player_dmg);
	}
	while (enemy_hp > 0) {
		if (dmg - enemy_def <= 0) {
			return [999999, "green"];
		}
		enemy_hp -= (dmg - enemy_def);
		if (enemy_hp <= 0) {
			break;
		}
		Failhp += (enemy_dmg);
	}
	var b = [Failhp, "color"];
	if (Failhp > hp) {
		b = [Failhp, "green"];
		return b;
	} else {
		b = [Failhp, "red"];
		return b;
	}
}


function Move(index) {
	var true_index = parseInt(index) - 1;
	if (hp > 0) {
		now_step++;
		addLine();
		playMusic_normal(se[1]);
		var divs = document.getElementsByClassName("block");
		var attrP = document.getElementsByClassName("effectName");
		var nameP = document.getElementsByClassName("name");
		var hpP = document.getElementById("heal");
		divs[4].innerText = nameP[true_index].innerText;
		divs[4].style.textDecoration = "line-through";
		hp += parseInt(dmg_flag[true_index]);
		if (hp <= 0) {
			hpP.innerText = hp;
			addP("失去了&nbsp;" + -(parseInt(dmg_flag[true_index])) + "&nbsp;生命值", "red");
			addP("你死在了&nbsp;" + name_flag[true_index] + "&nbsp;手中", "red");
			dead++;
			dead_sum.innerText = dead;
			restart_button.style.display = "flex";
		} else {
			if (now_step < step + 1) {
				addP("你点击了&nbsp;" + name_flag[true_index], "white");
				if (parseInt(dmg_flag[true_index]) < 0) {
					addP("失去了&nbsp;" + -(parseInt(dmg_flag[true_index])) + "&nbsp;生命值", "red");
				} else if (parseInt(dmg_flag[true_index]) > 0) {
					addP("恢复了&nbsp;" + parseInt(dmg_flag[true_index]) + "&nbsp;生命值", "green");
				}
				if (parseInt(exp_flag[true_index]) != 0) {
					addP("获得了&nbsp;" + parseInt(exp_flag[true_index]) + "&nbsp;经验值", "yellow");
				}
				if (hp >= 100) {
					hp = 100;
					addP("血量达到上限，无法继续回复", "red");
				}
				hpP.innerText = hp;
				user_exp += exp_flag[true_index];
				uplevel();
				showText(RE_flag);
			} else {
				addP("你击败了&nbsp;" + name_flag[true_index] + "&nbsp;!", "white");
				isBossFail[true_index] = true;
				now_step = 0;
				if (parseInt(dmg_flag[true_index]) < 0) {
					addP("失去了&nbsp;" + -(parseInt(dmg_flag[true_index])) + "&nbsp;生命值", "red");
				} else if (parseInt(dmg_flag[true_index]) > 0) {
					addP("恢复了&nbsp;" + parseInt(dmg_flag[true_index]) + "&nbsp;生命值", "green");
				}
				if (parseInt(exp_flag[true_index]) != 0) {
					addP("获得了&nbsp;" + parseInt(exp_flag[true_index]) + "&nbsp;经验值", "yellow");
				}
				if (hp >= 100) {
					hp = 100;
					addP("血量达到上限，无法继续回复", "red");
				}
				hpP.innerText = hp;
				user_exp += exp_flag[true_index];
				uplevel();
				showText(RE_flag);
			}

		}
	} else {
		playMusic_normal(se[2]);
	}
}

restart_button.onclick = function () {
	restart();
}

function restart(){
	var divs = document.getElementsByClassName("block");
	divs[4].innerText = "旅途开始";
	divs[4].style.textDecoration = "none";
	var hpP = document.getElementById("heal");
	now_step = 0;
	showText(RE_flag);
	addLine();
	addP("你复活了", "blue");
	hp = 100;
	hpP.innerText = hp;
}
