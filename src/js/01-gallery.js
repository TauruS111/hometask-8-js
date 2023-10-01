//Завдання 1 - бібліотека SimpleLightbox
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm 
//(посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того,
// що бібліотека була встановлена через npm(синтаксис import /export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, 
//крім того, що описаний в документації.

// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line


import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = galleryItems.map(item => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`;
}).join('');

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
