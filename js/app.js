const pomodoro = (function() {
	const start = document.querySelector('.start-btn');
	const stop = document.querySelector('.stop-btn');
	const timer = document.querySelector('.timer');
	const resetBtn = document.querySelector('.reset');
	const dec = document.querySelector('.dec');
	const inc = document.querySelector('.inc');
	const timerLength = document.querySelector('.time');

	let time = 25;
	let timeLeft = time * 60;
	let countDown = null;

	timer.innerHTML = getTime();
	start.addEventListener('click', startTimer);
	stop.addEventListener('click', stopTimer);
	resetBtn.addEventListener('click', reset);
	inc.addEventListener('click', increment);
	dec.addEventListener('click', decrement);

	function getTime() {
		let min = Math.floor(timeLeft / 60);
		let sec = (timeLeft - min * 60);
		return min + ':' + (sec < 10 ? '0' : '') + sec;
	}

	function startTimer() {
		this.style.display = 'none';
		stop.style.display = 'block';
		
		countDown = setInterval(counter, 1000);
		function counter() {
			if (timeLeft > 0) {
				timeLeft--;
				timer.innerHTML = getTime();
				document.title = getTime();
			} else if (timeLeft === 0) {
				clearInterval(countDown);
				timer.textContent = 'Timer Finished';
			}
		}
		
	}

	function stopTimer() {
		clearInterval(countDown);
		this.style.display = 'none';
		start.style.display = 'block';
	}

	function reset() {
		time = 25;
		timeLeft = time * 60;
		timer.textContent = getTime();
		timerLength.textContent = time;
		clearInterval(countDown);
		stop.style.display = 'none';
		start.style.display = 'block';
	}

	function increment() {
		time++;
		timeLeft = time * 60;
		timer.innerHTML = getTime();
		timerLength.textContent = time;
	}

	function decrement() {
		if (time > 1) {
			time--;
		}

		timeLeft = time * 60;
		timer.textContent = getTime();
		timerLength.textContent = time;
	}
})();