import{i}from"./assets/vendor-4d6948b9.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const c=document.querySelector(".search-form"),l=document.querySelector(".list-photo");c.addEventListener("submit",u);function u(t){t.preventDefault();const n=t.currentTarget,r=n.elements.query.value;f(r).then(d).catch(m).finally(()=>n.reset()),console.log(r)}function f(t){const s=`https://pixabay.com/api/?key=41849458-2d98265cf06659a45ba73a30c&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function m(t){console.error(t),i.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",color:"red"})}function d({hits:t}){const n=t.map(r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      data-source="${r.imoriginal}"
      alt="${r.tags}"
    />
  </a>
   <p>Likes: ${r.likes}</p>
   <p>Views: ${r.views}</p>
   <p>Comment: ${r.comments}</p>
   <p>Downloads: ${r.downloads}</p>
</li>`).join("");l.innerHTML=n}
//# sourceMappingURL=commonHelpers.js.map
