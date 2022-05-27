//import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe'); // подклювидео к плееру
const player = new Vimeo.Player(iframe); // подкл обраб изменю времени видео
const videoLocalStorage = 'videoplayer - current - time';

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
  localStorage.setItem(videoLocalStorage, data.seconds); //Получить текущую позицию воспроизведения в секундах.
}

player
  .setCurrentTime(localStorage.getItem(videoLocalStorage))
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
    }
  });

//player.getVideoTitle().then(function (title) {
