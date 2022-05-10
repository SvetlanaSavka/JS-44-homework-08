//3.Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
//import Player from '@vimeo/player';

const iframe = document.querySelector('iframe'); // подклювидео к плееру
const player = new Vimeo.Player(iframe); // подкл обраб изменю времени видео

player.on('timeupdate', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

//Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
player.on('eventName', function (timeupdate) {
  // data is an object containing properties specific to that event
});
//Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
//console.log(localStorage);

//localStorage.setItem('key', 'videoplayer-current-time');
//Прочитать из localStorage:
//console.log(localStorage.getItem('key'));
