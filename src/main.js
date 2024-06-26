import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
//------------------Simple Light box----------------

const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });

import { getImages } from './js/pixabay-api.js';
import { imageTamplate } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
const imageGallery = document.querySelector('.gallery');

let imageName = '';

form.addEventListener('input', (event) => {
    imageName = event.target.value.trim();
});

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    imageGallery.innerHTML = '';
    showLoader();

    if (imageName === '') {
    return;
    }

    getImages(imageName)
    .then(data => {
        if (data.hits.length === 0) {
        return iziToast.error({ ...errorParams });
        }

        const markup = imageTamplate(data.hits);
        imageGallery.innerHTML = markup;
        lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
        hideLoader();
    });
    return event.target.reset();
}

//---------------------Loader-----------------------

function showLoader() {
    loader.style.display = 'inline-block';
}

function hideLoader() {
    loader.style.display = 'none';
}

//------------------iziToast params----------------

const errorParams = {
    position: 'topRight',
    timeout: 1800,
    maxWidth: 300,
    icon: 'none',
    message: 'Sorry, there are no images matching your search query. Please try again!',
}

