function playMusic(obj) {
	myAudio = obj;
	myAudio.volume = 0.9;
	if (typeof myAudio.loop == 'boolean') {
		myAudio.loop = true;
	} else {
		myAudio.addEventListener('ended', function () {
			this.currentTime = 0;
			this.play();
		}, false);
	}
	myAudio.play();
}
function playMusic_normal(obj) {
	myAudio = obj;
	myAudio.play();
}
function stopMusic(obj) {
	myAudio = obj;
	myAudio.volume = 0;
}
