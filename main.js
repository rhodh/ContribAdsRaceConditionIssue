
/* global videojs*/


let player = null;
document.addEventListener("DOMContentLoaded", () => {
	player = videojs("videoPlayer", {}, () => {
		const options = {
			id: "videoPlayer"
		};

		player.ima(options);
	});

	videojs.Html5DashJS.hook("beforeinitialize", (videojsPlayer, mediaPlayer) => {
		mediaPlayer.setAutoPlay = function setAutoPlay() {
			//workaround to fix live play back due to know bug with videojs-dashjs
		};
	});

});

function playStream(url){
	const source = {
		src: url,
		type: "application/dash+xml"
	};

	player.src(source);
}

function playStreamOne(){
	playStream("http://livesim.dashif.org/livesim/snr_200/testpic_2s/Manifest.mpd");
}

function playStreamTwo(){
	playStream("http://livesim.dashif.org/livesim/snr_-1/testpic_2s/Manifest.mpd ");
}
