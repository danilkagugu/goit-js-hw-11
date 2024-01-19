import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=document.querySelector(".js-search-form"),c=document.querySelector(".list-photo"),i=document.querySelector(".loader");m.addEventListener("submit",f);function f(o){o.preventDefault(),h(),c.innerHTML="";const n=o.currentTarget,r=n.elements.query.value;setTimeout(()=>{p(r).then(g).then(s=>{s.hits.length<=0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(d).finally(()=>n.reset())},1e3)}function p(o){const s=`https://pixabay.com/api/?key=41849458-2d98265cf06659a45ba73a30c&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok||o==="")throw new Error(e.statusText);return e.json()})}function d(o){console.error(o),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function g({hits:o}){const n=o.map(r=>`<li class="gallery-item">
  
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      data-source="${r.imoriginal}"
      alt="${r.tags}"
    />
  </a>
  <ul class="img-list">
  <li class="img-info">
   <p class="img-text">Likes: <br><span>${r.likes}</span></p>
   <p class="img-text">Views: <br><span>${r.views}</span></p>
   <p class="img-text">Comment: <br><span>${r.comments}</span></p>
   <p class="img-text">Downloads: <br><span>${r.downloads}</span></p>
   </li>
   </ul>

</li>`).join("");c.innerHTML=n,y.refresh()}const y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(){i.style.display="inline-block",setTimeout(()=>{i.style.display="none"},1e3)}
//# sourceMappingURL=commonHelpers.js.map
