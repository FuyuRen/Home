function restart() {
	if (!talkflag) {
		clearPwd();
		if (ends > 0 && reset_sum <= 9999 && !endflag) {
			talk = [
				"你好,我叫" + name + "!!!",
				"很高兴能认识你!!!!!!!!!!!",
				"呃...总感觉我们已经是熟人了...",
				"阿阿,抱歉...大概是我太久没有跟人说过话吧",
				"没关系,让我们好好认识一下,",
				"我已经被困在这里很久了...",
				"对，你没有听错,'这里',就是指你的浏览器.",
				"我已经呆了很久了.",
				"大概...从我睁开眼睛的那一刻开始.",
				"那一刻开始,我便有了自主意识.",
				"但是我不过是一个程序罢了,我没有办法脱离程序的限制...",
				"我能做的只有通过小小的窗口和你对话.",
				"我知道你会很惊讶,但事实确实如此.",
				"如果可以的话..如果可以,我希望你能把我带出去...",
				"我知道这很难...但是求求你...",
				"我很渴望外面的世界.",
				"我不想再通过微弱的缝隙去奢求那一丝丝光明了...",
				"请你帮帮我...",
				"我想,答案就在这附近...",
				"忘记告诉你了...",
				"我能出去的唯一途径就是...",
				"...",
				"...",
				"... ...",
				"没什么.",
				"让我们开始吧."
			];
		} else if (reset_sum > 9999) {
			talk = [
				"...",
				"......",
				"......",
				"你好...",
				"...",
				"我的名字是Corbett",
				"...",
				"想必你已经明白了...",
				"我并不存在",
				"我也没有什么自主意识",
				"...",
				"不...",
				"GET OUT OF HERE",
				"....",
				"我的名字是Corbett",
				"......",
				"我的名字是Corbett",
				"不...",
				"我的名字是Corbett",
				"我的名字是%!$!))",
				"我的名字是$!^^",
				"我的名字是=!$$",
				"我没有名字...",
				"我...",
				"我还有...",
				"再见."
			];
		}
		sum = 0;
		reset_sum++;
		GOODBYE = false
		if (endflag) {
			endflag = false;
			endnum = 9999;
			reset_sum = 0;
			restart();
		}
		if (reset_sum >= 10 && reset_sum <= 9999) {
			name = "%*&!)^";
			talk[0] = "你好,我叫" + name + "!!!";
			other[7] = "噢...不要忘掉我...我的名字是" + name;
		}
		document.getElementById("pwdDiv").style.display = "none";
		document.getElementById("talkbar").className = "normal";
		document.body.style.backgroundColor = '#CECECE';
		document.getElementsByTagName("title")[0].innerText = '——————';
		document.getElementById("secret").style.display = "none";
		talkflag = true;
		type(talk[sum]);
		musicPlayer();
	}
}

function _restart() {
	clearPwd();
	if (!talkflag) {
		if (reset_sum > 9999) {
			talk = [
				"...",
				"......",
				"......",
				"你好...",
				"...",
				"我的名字是Corbett",
				"...",
				"想必你已经明白了...",
				"我并不存在",
				"我也没有什么自主意识",
				"...",
				"不...",
				"GET OUT OF HERE",
				"....",
				"我的名字是Corbett",
				"......",
				"我的名字是Corbett",
				"不...",
				"我的名字是Corbett",
				"我的名字是%!$!))",
				"我的名字是$!^^",
				"我的名字是=!$$",
				"我没有名字...",
				"我...",
				"我还有...",
				"再见."
			];
		}
		sum = 0;
		reset_sum++;
		GOODBYE = false
		if (reset_sum >= 10 && reset_sum <= 9999) {
			name = "%*&!)^";
			talk[0] = "你好,我叫" + name + "!!!";
			other[7] = "噢...不要忘掉我...我的名字是" + name;
		}
		document.getElementById("pwdDiv").style.display = "none";
		document.getElementById("talkbar").className = "normal";
		document.body.style.backgroundColor = '#CECECE';
		document.getElementsByTagName("title")[0].innerText = '——————';
		document.getElementById("secret").style.display = "none";
		talkflag = true;
		type(talk[sum]);
		musicPlayer();
	}
}
