import{i,S as l}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".js-search-form"),u=document.querySelector(".list-photo");c.addEventListener("submit",m);function m(o){o.preventDefault();const n=o.currentTarget,t=n.elements.query.value;f(t).then(d).catch(p).finally(()=>n.reset())}function f(o){const s=`https://pixabay.com/api/?key=41849458-2d98265cf06659a45ba73a30c&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p(o){o&&(console.error(o),i.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}))}function d({hits:o}){const n=o.map(t=>`<li class="gallery-item">
  
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.imoriginal}"
      alt="${t.tags}"
    />
  </a>
  <ul class="img-list">
  <li class="img-info">
   <p class="img-text">Likes: <br><span>${t.likes}</span></p>
   <p class="img-text">Views: <br><span>${t.views}</span></p>
   <p class="img-text">Comment: <br><span>${t.comments}</span></p>
   <p class="img-text">Downloads: <br><span>${t.downloads}</span></p>
   </li>
   </ul>

</li>`).join("");u.innerHTML=n,g.refresh()}const g=new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
