import{S as m,i as c}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f=new m(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".js-search-form"),i=document.querySelector(".list-photo"),l=document.querySelector(".loader");h.addEventListener("submit",p);function p(o){o.preventDefault(),l.style.display="inline-block",i.innerHTML="";const t=o.currentTarget,n=t.elements.query.value.trim();y(n).then(s=>{if(!s.hits.length||n===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}i.innerHTML=g(s.hits),f.refresh()}).catch(d).finally(()=>t.reset()),l.style.display="none"}function y(o){const t="https://pixabay.com/api",n="41849458-2d98265cf06659a45ba73a30c",s=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}/?${s}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function d(o){console.error(o),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function g(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:a,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${s}"
              width="360"
            />
          </a>
          <ul class="img-list">
  <li class="img-info">
   <p class="img-text">Likes: <br><span>${e}</span></p>
   <p class="img-text">Views: <br><span>${r}</span></p>
   <p class="img-text">Comment: <br><span>${a}</span></p>
   <p class="img-text">Downloads: <br><span>${u}</span></p>
   </li>
   </ul>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
