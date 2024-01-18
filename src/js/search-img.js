// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.js-search-form');
const ulEl = document.querySelector('.list-photo');
searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const query = form.elements.query.value;

  searchPhoto(query)
    .then(markupPhoto)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function searchPhoto(value) {
  const BAZE_URL = 'https://pixabay.com/api';
  const API_KEY = '41849458-2d98265cf06659a45ba73a30c';
  const url = `${BAZE_URL}/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function onFetchError(error) {
  if (error) {
    console.error(error);
    iziToast.show({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      color: 'red',
    });
  }
}
function markupPhoto({ hits }) {
  const markup = hits
    .map(
      hits => `<li class="gallery-item">
  
  <a class="gallery-link" href="${hits.largeImageURL}">
    <img
      class="gallery-image"
      src="${hits.webformatURL}"
      data-source="${hits.imoriginal}"
      alt="${hits.tags}"
    />
  </a>
  <ul class="img-list">
  <li class="img-info">
   <p class="img-text">Likes: <br><span>${hits.likes}</span></p>
   <p class="img-text">Views: <br><span>${hits.views}</span></p>
   <p class="img-text">Comment: <br><span>${hits.comments}</span></p>
   <p class="img-text">Downloads: <br><span>${hits.downloads}</span></p>
   </li>
   </ul>

</li>`
    )
    .join('');

  ulEl.innerHTML = markup;
  modalLightboxGallery.refresh();
}

const modalLightboxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
