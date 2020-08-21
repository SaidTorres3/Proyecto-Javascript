import MediaPlayer from './MediaPlayer.js';
import AutoPlayer from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlayer()] });

const playButton = document.getElementById("play");
const muteButton = document.getElementById("mute");


playButton.onclick = () => {
    player.paused() ? player.play() : player.pause();
}

muteButton.onclick = () => {
    player.getMuteStatus() ? player.unmute() : player.mute();
}

