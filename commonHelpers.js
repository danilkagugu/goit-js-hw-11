import{i as c,S as m}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelector(".js-search-form"),a=document.querySelector(".list-photo"),l=document.querySelector(".loader");f.addEventListener("submit",p);function p(r){r.preventDefault(),L(),a.innerHTML="";const o=r.currentTarget,n=o.elements.query.value;setTimeout(()=>{h(n).then(s=>{s.hits.length||c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML=d(s.hits),g.refresh()}).catch(y).finally(()=>o.reset())},1e3)}function h(r){const s=`https://pixabay.com/api/?key=41849458-2d98265cf06659a45ba73a30c&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok||r==="")throw new Error(e.statusText);return e.json()})}function y(r){console.error(r),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function d(r){return r.map(({webformatURL:o,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${s}"
              width="360"
            />
          </a>
          <ul class="img-list">
  <li class="img-info">
   <p class="img-text">Likes: <br><span>${e}</span></p>
   <p class="img-text">Views: <br><span>${t}</span></p>
   <p class="img-text">Comment: <br><span>${i}</span></p>
   <p class="img-text">Downloads: <br><span>${u}</span></p>
   </li>
   </ul>
        </li>`).join("")}const g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(){l.style.display="inline-block",setTimeout(()=>{l.style.display="none"},1e3)}
//# sourceMappingURL=commonHelpers.js.map
