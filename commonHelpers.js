import{S as m,i}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=new m(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".js-search-form"),c=document.querySelector(".list-photo"),a=document.querySelector(".loader");a.style.display="none";f.addEventListener("submit",h);function h(n){n.preventDefault(),a.style.display="inline-block",c.innerHTML="";const o=n.currentTarget,s=o.elements.query.value.trim();if(s===""){i.show({title:"Error",color:"yellow",message:"Please search for something"}),a.style.display="none";return}y(s).then(r=>{if(a.style.display="none",!r.hits.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.innerHTML=d(r.hits),p.refresh()}).catch(r=>{a.style.display="none",console.log(r)}).finally(()=>o.reset())}function y(n){const o="https://pixabay.com/api",s="41849458-2d98265cf06659a45ba73a30c",r=new URLSearchParams({key:s,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}/?${r}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function d(n){return n.map(({webformatURL:o,largeImageURL:s,tags:r,likes:e,views:t,comments:l,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${r}"
              width="360"
            />
          </a>
          <ul class="img-list">
  <li class="img-info">
   <p class="img-text">Likes: <br><span>${e}</span></p>
   <p class="img-text">Views: <br><span>${t}</span></p>
   <p class="img-text">Comment: <br><span>${l}</span></p>
   <p class="img-text">Downloads: <br><span>${u}</span></p>
   </li>
   </ul>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
