var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
});

// Initialize the video element
var video = document.getElementById('player1');
	video.autoplay = false;
    video.loop = false;   
	window.addEventListener("load", function() {
    console.log("Good job opening the window");
});

// Play Button
document.getElementById('play').addEventListener('click', function() {
    video.play();
    console.log("Video playing");
    updateVolumeInfo();
});

// Pause Button
document.getElementById('pause').addEventListener('click', function() {
    video.pause();
    console.log("Video paused");
});

// Slow Down Button
document.getElementById('slower').addEventListener('click', function() {
    video.playbackRate -= 0.1;
    console.log("New playback rate: " + video.playbackRate);
});

// Speed Up Button
document.getElementById('faster').addEventListener('click', function() {
    video.playbackRate += 0.1;
    console.log("New playback rate: " + video.playbackRate);
});

// Skip Ahead Button
document.getElementById('skip').addEventListener('click', function() {
	if (video.currentTime + 10 < video.duration) {
    	video.currentTime += 10;
	} else {
    	video.currentTime = 0;
	}
    	console.log("Current location: " + video.currentTime);
});

// Mute Button
document.getElementById('mute').addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        this.innerText = "Mute";
    } else {
        video.muted = true;
        this.innerText = "Unmute";
    }
});

// Volume Slider
var volumeSlider = document.getElementById('slider');
	volumeSlider.addEventListener('input', function() {
    var volumeValue = this.value / 100;
    video.volume = volumeValue;
	updateVolumeInfo();
});

// Update volume information
function updateVolumeInfo() {
    var volumeSpan = document.getElementById('volume');
    var volumePercentage = Math.round(video.volume * 100);
    volumeSpan.innerText = volumePercentage + "%";
}

// Styled Button (Add oldSchool class)
document.getElementById('vintage').addEventListener('click', function() {
    video.classList.add('oldSchool');
});

// Original Button (Remove oldSchool class)
document.getElementById('orig').addEventListener('click', function() {
    video.classList.remove('oldSchool');
});
