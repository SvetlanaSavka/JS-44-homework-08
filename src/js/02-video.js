//import Player from '@vimeo/player';

const iframe = document.querySelector('iframe'); // подклювидео к плееру
const player = new Vimeo.Player(iframe); // подкл обраб изменю времени видео
const videoLocalStorage = 'videoplayer - current - time';

player.on('timeupdate', onPlay);
player.on('loaded', afterPlay);

function onPlay() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(videoLocalStorage, seconds); //Получить текущую позицию воспроизведения в секундах.
  });
}

function afterPlay() {
  const savedTime = localStorage.getItem(videoLocalStorage);
  player
    .setCurrentTime(savedTime)
    .then(function (seconds) {
      console.log(seconds);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
      }
    });
}

//player.getVideoTitle().then(function (title) {
