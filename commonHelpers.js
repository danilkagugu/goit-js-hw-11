import"./assets/vendor-491d46cf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".search-form"),c=document.querySelector(".list-photo");l.addEventListener("submit",i);function i(n){n.preventDefault();const o=n.currentTarget,t=o.elements.query.value;u(t).then(f).finally(()=>o.reset())}function u(n){const s=`https://pixabay.com/api?key=41849458-2d98265cf06659a45ba73a30c&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function f({hits:n}){const o=n.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.imoriginal}"
      alt="${t.tags}"
    />
  </a>
   <p>Likes: ${t.likes}</p>
   <p>Views: ${t.views}</p>
   <p>Comment: ${t.comments}</p>
   <p>Downloads: ${t.downloads}</p>
</li>`).join("");c.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
