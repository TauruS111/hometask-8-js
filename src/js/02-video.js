// Завдання 2 - відеоплеєр
// HTML містить < iframe > з відео для Vimeo плеєра.Напиши скрипт,
//     який буде зберігати поточний час відтворення відео у локальне сховище і,
//     після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

// <iframe
//   id="vimeo-player"
//   src="https://player.vimeo.com/video/236203659"
//   width="640"
//   height="360"
//   frameborder="0"
//   allowfullscreen
//   allow="autoplay; encrypted-media"
// ></iframe>

// Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:

// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre - existing player, але враховуй,
//  що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime()
// з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так,
// щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.


// Import the Vimeo Player library
// import Player from '@vimeo/player';

// // Initialize the Vimeo Player
// let iframe = document.querySelector('#vimeo-player');
// let player = new Player(iframe);

// // Throttle function from lodash
// import throttle from 'lodash.throttle';

// // Function to save the current time to localStorage
// function saveCurrentTime(data) {
//     localStorage.setItem('videoplayer-current-time', data.seconds);
// }

// // Throttled version of saveCurrentTime
// let throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);

// // Listen for timeupdate event
// player.on('timeupdate', throttledSaveCurrentTime);

// // On page load, get the current time from localStorage and set the player's current time
// document.addEventListener('DOMContentLoaded', (event) => {
//     let savedTime = localStorage.getItem('videoplayer-current-time');
//     if (savedTime !== null) {
//         player.setCurrentTime(savedTime);
//     }
// });

// Підключаємо бібліотеку Vimeo Player API
//import Player from '@vimeo/player';
//import throttle from 'lodash.throttle';

// Ініціалізуємо плеєр
const player = new Player('vimeo-player');

// Визначаємо ключ для локального сховища
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// Отримуємо збережений час відтворення з локального сховища
const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (savedTime) {
  // Встановлюємо час відтворення на збережений час
  player.setCurrentTime(savedTime);
}

// Встановлюємо обробник події 'timeupdate'
player.on('timeupdate', throttle(event => {
  // Зберігаємо поточний час відтворення у локальне сховище
  localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}, 1000));

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);
