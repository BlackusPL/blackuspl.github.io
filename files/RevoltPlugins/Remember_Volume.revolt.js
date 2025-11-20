state.plugins.add({format:1,version:"0.0.1",namespace:"BlackusPL",id:"RememberVolume",entrypoint:`
async () => {
	function setupVolumeControl(me) {
		me.volume = window.localStorage.getItem("volume") || 1;
		me.addEventListener("play", (e) => {
			e.target.volume = window.localStorage.getItem("volume") || 1;
		});
		me.addEventListener("volumechange", (e) => {
			window.localStorage.setItem("volume", e.target.volume);
		});
	}
	while (1) {
		let files = document.querySelectorAll(":not(.checkedForVol)[class*=downloadIcon]");
		if (!files[0]) {
			await new Promise(r => setTimeout(r, 1000));
			continue;
		}
		for (const e of files) {
			e.classList.add("checkedForVol");
			const element = e.parentElement.parentElement;
			const videoElement = element.querySelector('video');
			const audioElement = element.querySelector('audio');

			if (videoElement) setupVolumeControl(videoElement)
			if (audioElement) setupVolumeControl(audioElement)
		}
	}
}
`})
