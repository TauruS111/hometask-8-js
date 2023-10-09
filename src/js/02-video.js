import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (savedTime) {
   player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(event => {
  localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}, 1000));

const onPlay = function (data) {
  
};

player.on('play', onPlay);


    