import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m=document.querySelector(".js-search-form"),l=document.querySelector(".list-photo"),i=document.querySelector(".loader");m.addEventListener("submit",f);function f(r){r.preventDefault(),h(),l.innerHTML="";const n=r.currentTarget,t=n.elements.query.value;setTimeout(()=>{p(t).then(g).catch(d).finally(()=>n.reset())},1e3)}function p(r){const s=`https://pixabay.com/api/?key=41849458-2d98265cf06659a45ba73a30c&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function d(r){r&&(console.error(r),c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}))}function g({hits:r}){const n=r.map(t=>`<li class="gallery-item">
  
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

</li>`).join("");l.innerHTML=n,y.refresh()}const y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(){i.style.display="inline-block",setTimeout(()=>{i.style.display="none"},1e3)}
//# sourceMappingURL=commonHelpers.js.map
