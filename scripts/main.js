const songs = {
  song1: 'audios/song1.mp3', 
  song2: 'audios/song2.mp3',
  song3: 'audios/song3.mp3',
  song4: 'audios/song4.mp3'
};



function playSong(songKey) {
  const audio = document.getElementById('audio-player');
  const currentSrc = audio.getAttribute('src');

  if (currentSrc !== songs[songKey]) {
    audio.src = songs[songKey];
    audio.play();
  } else if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function toggleButton(button) {
  const buttons = document.querySelectorAll('.toggle-button');
  buttons.forEach(btn => btn.classList.remove('active'));

  button.classList.add('active');
}