// JavaScript Document
var _chessDiv = document.getElementsByClassName("block");
var chessDiv = new Array();
var chess = new Array();
var clickSum = 0;
var successFlag = false;

function init() {
	successFlag = false;
	clickSum = 0;
	for (var i = 0; i < 5; i++) {
		chess[i] = new Array();
		for (var j = 0; j < 5; j++) {
			chess[i][j] = 0;
		}
	}
	var flag = 0;
	for (var i = 0; i < 5; i++) {
		chessDiv[i] = new Array();
		for (var j = 0; j < 5; j++) {
			chessDiv[i][j] = _chessDiv[flag];
			flag++;
		}
	}
}

function code(x, y) {
	chessDiv[x][y].style.backgroundColor = (chess[x][y] == 0) ? "#FF00C6" : "#A193FF";
	chess[x][y] = 1 - chess[x][y];
}

function cons() {
	console.log("");
	console.log("");
	console.log("");
	for (var i = 0; i < 5; i++) {
		console.log(chess[i]);
	}
}

function check() {
	var flag = true;
	for (var i = 0; i < 5; i++) {
		chessDiv[i] = new Array();
		for (var j = 0; j < 5; j++) {
			if (chess[i][j] == 0) {
				flag = false;
			}
		}
	}
}

function active(row, col) {
	if (successFlag == false) {
		clickSum++;
		//alert(row + "," + col + ":" + chess[row][col]);
		code(row, col);
		if ((row == 0 || row == 4 || col == 0 || col == 4)) {
			if (row == 0 && col == 0) {
				code(row + 1, col);
				code(row, col + 1);
			} else if (row == 0 && col == 4) {
				code(row + 1, col);
				code(row, col - 1);
			} else if (row == 4 && col == 0) {
				code(row - 1, col);
				code(row, col + 1);
			} else if (row == 4 && col == 4) {
				code(row - 1, col);
				code(row, col - 1);
			} else if (row == 0) {
				code(row + 1, col);
				code(row, col + 1);
				code(row, col - 1);
			} else if (row == 4) {
				code(row - 1, col);
				code(row, col + 1);
				code(row, col - 1);
			} else if (col == 0) {
				code(row + 1, col);
				code(row - 1, col);
				code(row, col + 1);
			} else if (col == 4) {
				code(row + 1, col);
				code(row - 1, col);
				code(row, col - 1);
			}
		} else {
			code(row + 1, col);
			code(row - 1, col);
			code(row, col + 1);
			code(row, col - 1);
		}
		cons();
		if (check() && successFlag) {
			alert("恭喜，您完成了游戏，共点击" + clickSum + "次！");
			successFlag = true;
		}
	}
}
init();
