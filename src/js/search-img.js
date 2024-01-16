// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
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
  const url = `${BAZE_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function onFetchError(error) {
  console.error(error);
  iziToast.show({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topCenter',
    color: 'red',
  });
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
   <p>Likes: ${hits.likes}</p>
   <p>Views: ${hits.views}</p>
   <p>Comment: ${hits.comments}</p>
   <p>Downloads: ${hits.downloads}</p>
</li>`
    )
    .join('');

  ulEl.innerHTML = markup;
}
