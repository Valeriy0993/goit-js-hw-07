import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function renderGallery() {
  gallery.innerHTML = galleryItems
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
    )
    .join("");
}

renderGallery();

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    const imageUrl = e.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);

    instance.show();
  }
});

console.log(galleryItems);
