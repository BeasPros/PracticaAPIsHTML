const fileSelector = document.getElementById('fileSelector');
const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeUpButton = document.getElementById('volumeUpButton');
const volumeDownButton = document.getElementById('volumeDownButton');
const fastForwardButton = document.getElementById('fastForwardButton');
const rewindButton = document.getElementById('rewindButton');
const speedButton = document.getElementById('speedButton');
const loadingMessage = document.getElementById('loadingMessage');

fileSelector.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file.type.startsWith('video/')) {
        const fileURL = URL.createObjectURL(file);
        videoPlayer.src = fileURL;
        loadingMessage.style.display = 'block';
        setTimeout(() => {
            videoPlayer.play();
        }, 10000); // Delay 
    } else {
        alert('Por favor, selecciona un archivo de video.');
    }
});

videoPlayer.addEventListener('loadeddata', () => {
    loadingMessage.style.display = 'none';
    alert('El video ha sido cargado correctamente');
});

playButton.addEventListener('click', () => {
    videoPlayer.play();
});

pauseButton.addEventListener('click', () => {
    videoPlayer.pause();
});

volumeUpButton.addEventListener('click', () => {
    if (videoPlayer.volume < 0.9) {
        videoPlayer.volume += 0.1;
    }
});

volumeDownButton.addEventListener('click', () => {
    if (videoPlayer.volume > 0.1) {
        videoPlayer.volume -= 0.1;
    }
});

fastForwardButton.addEventListener('click', () => {
    videoPlayer.currentTime += 10;
});

rewindButton.addEventListener('click', () => {
    videoPlayer.currentTime -= 10;
});

speedButton.addEventListener('click', () => {
    videoPlayer.playbackRate = 2;
});
